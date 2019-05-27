import { BpmnModdleOrigin } from './BpmnModdleOrigin'
import { IMappedContext, SerializedNode, TypeResolver } from './schema'
import { prepareReferences } from './prepareReferences'
import { prepareElements } from './prepareElements'
import { BpmnElementTypes } from './enums'

export const ModdleContextSerializer = {
  serialize
}

function serialize<T extends { $type: string }>(moddleContext: BpmnModdleOrigin.Context, activitiesMap: Record<string, T>) {
  const mappedReferences = prepareReferences(moddleContext)

  const mappedContext = prepareElements(mappedReferences, moddleContext)

  const typeResolver = getTypeResolver(activitiesMap)

  loadBehaviour(mappedContext, typeResolver)

  return new ModdleContextApi(mappedContext)
}

function loadBehaviour<T>(mappedContext: IMappedContext<T>, typeResolver: TypeResolver<T>) {
  const {
    definition,
    activities,
    dataObjects,
    errors,
    messageFlows,
    processes,
    sequenceFlows,
  } = mappedContext

  typeResolver(definition)
  processes.forEach(typeResolver)
  activities.forEach(typeResolver)
  dataObjects.forEach(typeResolver)
  errors.forEach(typeResolver)
  messageFlows.forEach(typeResolver)
  sequenceFlows.forEach(typeResolver)

  return mappedContext
}

function getTypeResolver<T extends { $type: string }>(behaviourMap: Record<string, T>): TypeResolver<T> {
  const supportedElementNames = Object.values(BpmnElementTypes)

  const cacheBehaviourMap: Record<string, T> = {}

  Object.values(behaviourMap).map(Behaviour => {
    cacheBehaviourMap[Behaviour.$type] = Behaviour
    if (!supportedElementNames.includes(Behaviour.$type)) {
      throw new Error(`Unknown activity type ${Behaviour.$type}`)
    }
  })

  return function resolve(entity: SerializedNode<T>) {
    const { type, behaviour = {} } = entity

    entity.Behaviour = cacheBehaviourMap[type]

    if (behaviour.loopCharacteristics) {
      resolve(behaviour.loopCharacteristics)
    }

    if (behaviour.eventDefinitions) {
      behaviour.eventDefinitions.map(resolve)
    }

    if (behaviour.ioSpecification) {
      resolve(behaviour.ioSpecification)
    }
  }
}

export class ModdleContextApi<T> {
  id: string
  type: string
  name: string

  constructor(public moddleContext: IMappedContext<T>) {
    const { definition } = moddleContext
    this.id = definition.id
    this.type = definition.type
    this.name = definition.name
  }

  getActivities(scopeId?: string) {
    const { activities } = this.moddleContext
    if (!scopeId) {
      return activities
    }

    return activities.filter(activity => activity.parent.id === scopeId)
  }

  getActivityById(actvitiyId: string) {
    const { activities } = this.moddleContext
    return activities.find(activity => activity.id === actvitiyId)
  }

  getDataObjects() {
    return this.moddleContext.dataObjects
  }

  getDataObjectById(dataObjectId: string) {
    const { dataObjects } = this.moddleContext
    return dataObjects.find(dataObject => dataObject.id === dataObjectId)
  }

  getErrorById(errorId: string) {
    const { errors } = this.moddleContext
    return errors.find(error => error.id === errorId)
  }

  getErrors() {
    return this.moddleContext.errors
  }

  getExecutableProcesses() {
    const { processes } = this.moddleContext
    return processes.filter(process => process.behaviour.isExecutable)
  }

  getInboundSequenceFlows(activityId: string) {
    const { sequenceFlows } = this.moddleContext
    return sequenceFlows.filter(flow => flow.targetId === activityId)
  }

  getMessageFlows(scopeId?: string) {
    const { messageFlows } = this.moddleContext

    if (scopeId) {
      return messageFlows.filter(flow => flow.source.processId === scopeId)
    }

    return messageFlows
  }

  getOutboundSequenceFlows(activityId: string) {
    const { sequenceFlows } = this.moddleContext
    return sequenceFlows.filter(flow => flow.sourceId === activityId)
  }

  getProcessById(processId: string) {
    const { processes } = this.moddleContext
    return processes.find(process => process.id === processId)
  }

  getProcesses() {
    return this.moddleContext.processes
  }

  getSequenceFlowById(flowId: string) {
    const { sequenceFlows } = this.moddleContext
    return sequenceFlows.find(flow => flow.id === flowId)
  }

  getSequenceFlows(scopeId?: string) {
    const { sequenceFlows } = this.moddleContext
    if (scopeId) {
      return sequenceFlows.filter(flow => flow.parent.id === scopeId)
    }

    return sequenceFlows
  }

  toJson() {
    const {
      activities,
      dataObjects,
      definition,
      errors,
      messageFlows,
      processes,
      sequenceFlows,
    } = this.moddleContext

    return JSON.stringify({
      id: definition.id,
      type: definition.type,
      name: definition.name,
      activities,
      dataObjects,
      definition,
      errors,
      messageFlows,
      processes,
      sequenceFlows,
    })
  }
}

