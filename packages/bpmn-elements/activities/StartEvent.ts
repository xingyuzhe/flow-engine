
/**@fileOverview
 * 起始节点:
 *   - 有一个父节点
 *   - 只有输出流
 * Acts as a process trigger; indicated by a single narrow border, 
 * and can only be Catch, so is shown with an open (outline) icon.
 */

import { FlowElement } from './FlowElement'
import { BpmnElementTypes, BpmnModdleOrigin } from '../moddle'

export class StartEvent extends FlowElement {
  static $type = BpmnElementTypes.BpmnStartEvent

  // private takeAll(outbound, variables) {
  //   debug(`take all ${this.element.id} ${outbound.length} sequence flows`);
  //   outbound.forEach(flow => {
  //     flow.take(variables)
  //   });
  // }
}
