import * as schema from './schema'
import { BpmnModdleOrigin } from './BpmnModdleOrigin'
import { BpmnReferenceProperties, BpmnElementTypes } from './enums'

export function prepareReferences($context: BpmnModdleOrigin.Context): schema.IPreparedReferences {
  const { references, elementsById } = $context

  const preparedReferences: schema.IPreparedReferences = {
    attachedToRefs: [],
    dataInputAssociations: [],
    dataObjectRefs: [],
    dataOutputAssociations: [],
    errorRefs: [],
    flowRefs: {},
    sourceRefs: {},
    targetRefs: {},
  }

  return references.reduce((result, reference) => {
    const { property, element } = reference

    switch (property) {
      case BpmnReferenceProperties.AttachedToRef:
        result.attachedToRefs.push(reference)
        break
      case BpmnReferenceProperties.ErrorRef:
        result.errorRefs.push(reference)
        break
      case BpmnReferenceProperties.SourceRef:
        {
          const flow = upsertFlowRef(element.id, {
            id: element.id,
            type: element.$type,
            sourceId: reference.id,
            element: elementsById[element.id],
          })

          const outbound = result.sourceRefs[reference.id] = result.sourceRefs[reference.id] || []
          outbound.push(flow)
          break
        }
      case BpmnReferenceProperties.TargetRef:
        {
          const flow = upsertFlowRef(element.id, {
            targetId: reference.id,
          })

          const inbound = result.targetRefs[reference.id] = result.targetRefs[reference.id] || []
          inbound.push(flow)
          break
        }
      case BpmnReferenceProperties.Default:
        upsertFlowRef(reference.id, { isDefault: true })
        break
      case BpmnReferenceProperties.DataObjectRef:
        result.dataObjectRefs.push(reference)
        break
    }

    switch (element.$type) {
      case BpmnElementTypes.BpmnOutputSet:
        break
      case BpmnElementTypes.BpmnInputSet:
        break
      case BpmnElementTypes.BpmnDataInputAssociation:
        result.dataInputAssociations.push(reference)
        break
      case BpmnElementTypes.BpmnDataOutputAssociation:
        result.dataOutputAssociations.push(reference)
        break
    }

    return result

    function upsertFlowRef(id: string, value: any): schema.IRefNode {
      const flow = result.flowRefs[id] = result.flowRefs[id] || {
        isDefault: false
      } as schema.IRefNode
      
      Object.assign(flow, value)

      return flow
    }
  }, preparedReferences)
}
