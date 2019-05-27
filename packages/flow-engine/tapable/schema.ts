export interface IObject {
  [index: string]: any
} 

export type Callback<E, T> = (error?: E, result?: T) => void

export enum ITapType {
  SYNC = 'sync',
  ASYNC = 'async',
  PROMISE = 'promise'
}

export interface ITapOptions {
  // 标记每个 handler，必须有
  name: string
  // 插入到指定的 handler 之前
  before?: string
  // handler 顺序的优先级，默认为 0，越小的排在越前面执行
  stage?: number
}

export interface ITap {
  // 标记每个 handler，必须有
  name: string
  // 插入到指定的 handler 之前
  before: string
  // 类型：'sync', 'async', 'promise'
  type: ITapType
  // handler
  fn: () => void
  // handler 顺序的优先级，默认为 0，越小的排在越前面执行
  stage: number
  // 内部是否维护 context 对象，这样在不同的 handler 就能共享这个对象
	context: boolean
}

