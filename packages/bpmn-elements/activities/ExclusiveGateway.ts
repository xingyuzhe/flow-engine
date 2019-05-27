/**
 * @fileOverview
 * 唯一网关:
 *   - 有输入和输出流
 *   - 只有一条输出路径可以被执行
 */

import { FlowElement } from './FlowElement'
import { BpmnElementTypes, BpmnModdleOrigin } from '../moddle'


export class ExclusiveGateway extends FlowElement {
  static $type = BpmnElementTypes.BpmnExclusiveGateway

  // private takeAll(variables) {
  //   let outbound = this.outbound
  //   debug(`take all ${this.element.id} ${outbound.length} sequence flows`);
  //   let taken = false;

  //   const defaultFlow = outbound.find((flow) => flow.isDefault);
  //   const conditionalFlows = outbound.filter((flow) => !flow.isDefault);

  //   // 走第一条满足条件的路径, 其它全部废弃
  //   // 如果没有满足条件的, 走默认路径
  //   for (let i = 0; i < conditionalFlows.length; i++) {
  //     const sequenceFlow = conditionalFlows[i];
  //     if (taken) {
  //       sequenceFlow.discard();
  //     } else {
  //       taken = sequenceFlow.take(variables);
  //     }
  //   }

  //   if (!taken && defaultFlow) {
  //     debug(`take ${this.element.id} default sequence flow ${defaultFlow.element.id}`);
  //     defaultFlow.take();
  //   } else if (defaultFlow) {
  //     defaultFlow.discard();
  //   } else if (!taken) {
  //     this.emit('error', new Error(`No conditional flow was taken ${this.element.id}`));
  //   }
  // }
}
