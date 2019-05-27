/**
 * @fileOverview
 * 脚本任务
 */

import { FlowElement } from './FlowElement'
import * as vm from 'vm'
import { BpmnElementTypes } from '../moddle/enums'

export class ScriptTask extends FlowElement {
  static $type = BpmnElementTypes.BpmnGlobalScriptTask
  script: vm.Script

  init() {
    // this.script = new vm.Script(this.element.script, {
    //   filename: `${this.element.id}.script`,
    //   displayErrors: true
    // })
  }

  excution() {
    this.executeScript()
  }

  private executeScript() {
    // const context = vm.createContext({
    //   context: variables,
    //   next: (err, data) => {
    //     if (err) {
    //       this.emit('error', err)
    //       return
    //     }

    //     this.output = data
    //     this.emit('end', this)
    //     this.takeAll(variables)
    //   }
    // });

    // const result = this.script.runInContext(context);
    // debug(`condition result ${this.element.id} evaluated to ${result}`);
    // return result;
  }

  // private takeAll(variables) {
  //   debug(`take all ${this.element.id} ${this.outbound.length} sequence flows`);
  //   this.outbound.forEach(outboundSequenceFlow => {
  //     outboundSequenceFlow.take(variables)
  //   })
  // }
}
