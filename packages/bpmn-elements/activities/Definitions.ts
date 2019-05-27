import { BpmnElementTypes, BpmnModdleOrigin } from '../moddle'
import { BaseElement } from './BaseElement'

export class Definitions extends BaseElement {
  static $type = BpmnElementTypes.BpmnDefinitions
  
  start() {
    const processes = this.ContextApi.getExecutableProcesses()
    processes.map(process => {
      process.getBehaviour().excute()
    })
  }
}
