/**
 * @fileOverview
 * 结束节点:
 *   - 只有输入流
 */

import { FlowElement } from './FlowElement'
import { BpmnElementTypes, BpmnModdleOrigin } from '../moddle'

export class EndEvent extends FlowElement {
  static $type = BpmnElementTypes.BpmnEndEvent
  isEndEvent: boolean = true
  isTaken: boolean = false

  execute(execution: any) {
    this.leave(execution)
  }

  leave(execution: any) {
    // 当前流程触发流程结束事件
    // 如果有父流程, 找到对应的父流程节点并触发该节点的结束事件
  }
}

export function isEndEvent(type: string) {
  return type === BpmnElementTypes.BpmnEndEvent
}
