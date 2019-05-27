import { BpmnModdleOrigin } from './BpmnModdleOrigin'

export interface IDefinetion<T> {
  id: string
  type: string
  name?: string
  Behaviour?: T
  behaviour?: BpmnModdleOrigin.GeneralElement
}

export interface ISerializedNode<T> extends IDefinetion<T> {
  processId: string
  parent: {
    id: string
    type: string
  }
  source: ISerializedNode<T>
  targetId: string
  sourceId: string
}

export type SerializedNode<T> = IDefinetion<T> | ISerializedNode<T>
export type TypeResolver<T> = (activity: SerializedNode<T>) => void

export interface IMappedContext<T> {
  definition: IDefinetion<T>
  activities: Array<ISerializedNode<T>>
  processes: Array<ISerializedNode<T>>
  sequenceFlows: Array<ISerializedNode<T>>
  messageFlows: Array<ISerializedNode<T>>
  errors: Array<ISerializedNode<T>>
  dataObjects: Array<ISerializedNode<T>>
}
export interface IBehaviour extends BpmnModdleOrigin.GeneralElement {
  attachedTo222?: BpmnModdleOrigin.Reference
}

export interface IPreparedReferences {
  attachedToRefs: BpmnModdleOrigin.Reference[]
  dataInputAssociations: BpmnModdleOrigin.Reference[]
  dataObjectRefs: BpmnModdleOrigin.Reference[]
  dataOutputAssociations: BpmnModdleOrigin.Reference[]
  errorRefs: BpmnModdleOrigin.Reference[]
  flowRefs: Record<string, IRefNode>
  sourceRefs: Record<string, IRefNode[]>
  targetRefs: Record<string, IRefNode[]>
}

export interface IRefNode {
  id: string
  type: string
  sourceId: string
  element: BpmnModdleOrigin.GeneralElement
  targetId?: string
  isDefault: boolean
}

export type RefNodeMap = Record<string, IRefNode>

export type ParentAttributes = {
  id: string
  type: string
}
