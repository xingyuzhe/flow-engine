import { BpmnModdleOrigin } from '../moddle'
import { ModdleContextApi } from '../moddle'

export class BaseElement {
  constructor(public ContextApi: ModdleContextApi<BaseElement>) {
    this.init()
  }

  getBehaviour() {
    return new this.ContextApi.Behaviour()
  }

  protected init() {
    //
  }
}
