import { RepositoryService } from './RepositoryService'
import { RuntimeService } from './RuntimeService'
import { TaskService } from './TaskService'
import { HistoryService } from './HistoryService'
import { ManagementService } from './ManagementService'
import { DynamicBpmnService } from './DynamicBpmnService'
import { ProcessEngineConfig } from './ProcessEngineConfig'

export class ProcessEngine {
  name = 'activiti.js'
  version = '0.1.0'
  processEngineConfig: ProcessEngineConfig
  constructor(processEngineConfig: ProcessEngineConfig) {
    this.processEngineConfig = processEngineConfig
    console.log('create ProcessEngine instance')
  }

  getProcessEngineConfig() {
    return this.processEngineConfig
  }

  getRepositoryService(): RepositoryService {
    return new RepositoryService()
  }
  getRuntimeService(): RuntimeService {
    return new RuntimeService()
  }
  getTaskService(): TaskService {
    return new TaskService()
  }
  getHistoryService() {
    return new HistoryService()
  }
  getManagementService() {
    return new ManagementService()
  }
  getDynamicBpmnService() {
    return new DynamicBpmnService()
  }
}
