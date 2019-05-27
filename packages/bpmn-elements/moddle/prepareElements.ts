import * as schema from './schema'
import { BpmnModdleOrigin } from './BpmnModdleOrigin'
import { BpmnReferenceProperties, BpmnElementTypes } from './enums'

function prepareActivity(parent: schema.ParentAttributes, elementDefintion: BpmnModdleOrigin.GeneralElement) {
  const { id, $type: type, name } = elementDefintion
  return {
    id,
    type,
    name,
    parent: {
      id: parent.id,
      type: parent.type,
    },
  }  
}


function prepareActivityBehaviour(references: schema.IPreparedReferences, elementDefintion: BpmnModdleOrigin.GeneralElement, behaviour?: schema.IBehaviour) {
  return {
    ...behaviour,
    ...elementDefintion,
    eventDefinitions: elementDefintion.eventDefinitions && elementDefintion.eventDefinitions.map(mapActivityBehaviour.bind(null, references)),
    loopCharacteristics: elementDefintion.loopCharacteristics && mapActivityBehaviour(references, elementDefintion.loopCharacteristics),
    ioSpecification: elementDefintion.ioSpecification && mapActivityBehaviour(references, elementDefintion.ioSpecification),
  }
}

function getDataObjectRef(references: schema.IPreparedReferences, dataObjectReferenceId: string) {
  const { dataObjectRefs } = references
  const dataObjectRef = dataObjectRefs.find((dor) => dor.element && dor.element.id === dataObjectReferenceId)

  if (!dataObjectRef) {
    return
  }

  return { ...dataObjectRef }
}

function getDataInputBehaviour(references: schema.IPreparedReferences, dataInputId: string) {
  const { dataInputAssociations } = references
  const target = dataInputAssociations.find((assoc) => {
    return assoc.property === BpmnReferenceProperties.TargetRef && assoc.id === dataInputId && !!assoc.element
  })

  const source = target && dataInputAssociations.find((assoc) => {
    return assoc.property === BpmnReferenceProperties.SourceRef && assoc.element && assoc.element.id === target.element.id
  })

  return {
    association: {
      source: source && { ...source, dataObject: getDataObjectRef(references, source.id) },
      target: target && { ...target },
    },
  }
}

function getDataOutputBehaviour(references: schema.IPreparedReferences, dataOutputId: string) {
  const { dataOutputAssociations } = references
  const source = dataOutputAssociations.find((assoc) => {
    return assoc.property === BpmnReferenceProperties.SourceRef && assoc.id === dataOutputId && !!assoc.element
  })

  const target = source && dataOutputAssociations.find((assoc) => {
    return assoc.property === BpmnReferenceProperties.TargetRef && assoc.element && assoc.element.id === source.element.id
  })

  return {
    association: {
      source: source && { ...source },
      target: target && { ...target, dataObject: getDataObjectRef(references, target.id) },
    },
  }
}

function prepareIoSpecificationBehaviour(references: schema.IPreparedReferences, ioSpecificationDef: BpmnModdleOrigin.InputOutputSpecification) {
  const { dataInputs, dataOutputs } = ioSpecificationDef

  return {
    dataInputs: dataInputs && dataInputs.map((dataDef) => {
      return {
        ...dataDef,
        type: dataDef.$type,
        behaviour: getDataInputBehaviour(references, dataDef.id),
      };
    }),
    dataOutputs: dataOutputs && dataOutputs.map((dataDef) => {
      return {
        ...dataDef,
        type: dataDef.$type,
        behaviour: getDataOutputBehaviour(references, dataDef.id),
      }
    }),
  }
}

function mapActivityBehaviour(references: schema.IPreparedReferences, elementDefintion: BpmnModdleOrigin.GeneralElement) {
  if (!elementDefintion) {
    return
  }

  const { errorRefs } = references
  const { $type: type } = elementDefintion
  let behaviour = { ...elementDefintion }

  switch (type) {
    case BpmnElementTypes.BpmnInputOutputSpecification:
      {
        behaviour = prepareIoSpecificationBehaviour(references, elementDefintion)
        break
      }
    case BpmnElementTypes.BpmnMultiInstanceLoopCharacteristics:
      {
        behaviour.loopCardinality = elementDefintion.loopCardinality && elementDefintion.loopCardinality.body
        behaviour.completionCondition = elementDefintion.completionCondition && elementDefintion.completionCondition.body
        break
      }
    case BpmnElementTypes.BpmnTimerEventDefinition:
      {
        behaviour.timeDuration = elementDefintion.timeDuration && elementDefintion.timeDuration.body
        break
      }
    case BpmnElementTypes.BpmnErrorEventDefinition:
      {
        const errorRef = errorRefs.find((r) => r.element === elementDefintion)
        behaviour.errorRef = errorRef && { ...errorRef }
        break
      }
  }

  return {
    type,
    behaviour,
  }
}

function prepareDataObjectReferences(references: schema.IPreparedReferences, elementDefintion: BpmnModdleOrigin.GeneralElement) {
  const { dataObjectRefs } = references
  const objectRefs = dataObjectRefs.filter(objectRef => objectRef.id === elementDefintion.id)

  return objectRefs.map((objectRef) => {
    return {
      id: objectRef.element.id,
      type: objectRef.element.$type,
      behaviour: { ...objectRef.element },
    }
  })
}

function getElementProcessId(elementId: string, $context: BpmnModdleOrigin.Context): string {
  const { rootElements } = $context.rootHandler.element
  return rootElements.find(element => {
    return element.$type === BpmnElementTypes.BpmnProcess && !!element.flowElements.find(flowElement => flowElement.id === elementId)
  }).id
}

export function prepareElements<T>(references: schema.IPreparedReferences, moddleContext: BpmnModdleOrigin.Context): schema.IMappedContext<T> {
  const { rootHandler } = moddleContext
  const rootParent = {
    id: rootHandler.element.id,
    type: rootHandler.element.$type
  }

  const definition: schema.IDefinetion<T> = {
    id: rootHandler.element.id,
    type: rootHandler.element.$type,
    name: rootHandler.element.name,
  }

  const mappedContext: schema.IMappedContext<T> = {
    definition,
    activities: [],
    dataObjects: [],
    errors: [],
    messageFlows: [],
    processes: [],
    sequenceFlows: [],
  }

  return prepareElementsDetail(rootParent, rootHandler.element.rootElements)

  function prepareElementsDetail(parent: schema.ParentAttributes, elementsDefintion: BpmnModdleOrigin.GeneralElement[]): schema.IMappedContext<T> {
    if (!elementsDefintion) {
      return mappedContext
    }

    const {
      flowRefs,
      attachedToRefs
    } = references

    function prepareActivityAndBehaviour(elementDefintion: BpmnModdleOrigin.GeneralElement, behaviour?: schema.IBehaviour) {
      return {
        ...prepareActivity(parent, elementDefintion),
        behaviour: prepareActivityBehaviour(references, elementDefintion, behaviour)
      }
    }

    return elementsDefintion.reduce((result, elementDefintion) => {
      const { id, $type: type } = elementDefintion

      let attachedTo
      switch (type) {
        case BpmnElementTypes.BpmnDataObjectReference:
          break
        case BpmnElementTypes.BpmnMessage:
          break
        case BpmnElementTypes.BpmnCollaboration:
          {
            if (elementDefintion.messageFlows) {
              const { messageFlows } = prepareElementsDetail(parent, elementDefintion.messageFlows)
              result.messageFlows = result.messageFlows.concat(messageFlows)
            }
            break
          }
        case BpmnElementTypes.BpmnMessageFlow:
          {
            const flowRef = flowRefs[elementDefintion.id]
            result.messageFlows.push({
              ...flowRef,
              ...prepareActivity(parent, elementDefintion), 
              source: {
                processId: getElementProcessId(flowRef.sourceId, moddleContext),
                id: flowRef.sourceId,
              },
              target: {
                processId: getElementProcessId(flowRef.targetId, moddleContext),
                id: flowRef.targetId,
              },
              behaviour: { ...elementDefintion },
            })
            break
          }
        case BpmnElementTypes.BpmnError:
          {
            result.errors.push({
              ...prepareActivity(parent, elementDefintion), 
              behaviour: { ...elementDefintion },
            })
            break
          }
        case BpmnElementTypes.BpmnDataObject:
          {
            result.dataObjects.push({
              ...prepareActivity(parent, elementDefintion), 
              references: prepareDataObjectReferences(references, elementDefintion),
              behaviour: { ...elementDefintion },
            })
            break
          }
        case BpmnElementTypes.BpmnSequenceFlow:
          {
            const flowRef = flowRefs[elementDefintion.id]

            result.sequenceFlows.push({
              ...prepareActivity(parent, elementDefintion), 
              isDefault: flowRef.isDefault,
              targetId: flowRef.targetId,
              sourceId: flowRef.sourceId,
              behaviour: { ...elementDefintion },
            })
            break
          }
        case BpmnElementTypes.BpmnProcess:
          {
            const bp = {
              ...prepareActivity(parent, elementDefintion), 
              behaviour: prepareActivityBehaviour(references, elementDefintion),
            }

            if (type === BpmnElementTypes.BpmnProcess) {
              result.processes.push(bp)
            } else {
              result.activities.push(bp)
            }

            const subElements = prepareElementsDetail({ id, type }, elementDefintion.flowElements)

            if (subElements.activities) {
              result.activities = result.activities.concat(subElements.activities)
            }

            if (subElements.sequenceFlows) {
              result.sequenceFlows = result.sequenceFlows.concat(subElements.sequenceFlows)
            }

            if (subElements.dataObjects) {
              result.dataObjects = result.dataObjects.concat(subElements.dataObjects)
            }

            break
          }
        case BpmnElementTypes.BpmnBoundaryEvent:
          {
            attachedTo = attachedToRefs.find((r) => r.element.id === id)
            result.activities.push(prepareActivityAndBehaviour(elementDefintion, { attachedTo }))
            break
          }
        case BpmnElementTypes.BpmnServiceTask:
          {
            result.activities.push(prepareActivityAndBehaviour(elementDefintion))
            break
          }
        default:
          {
            result.activities.push(prepareActivityAndBehaviour(elementDefintion))
          }
      }

      return result

    }, mappedContext)
  }
}
