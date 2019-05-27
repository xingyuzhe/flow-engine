import { ProcessEngine } from './ProcessEngine'

export class ProcessEngineConfig {
  // db config
  // mail config

  static createProcessEngineConfigFromResourceDefault() {
    return new ProcessEngineConfig()
  }

  buildProcessEngine() {
    return new ProcessEngine(this)
  }
}
