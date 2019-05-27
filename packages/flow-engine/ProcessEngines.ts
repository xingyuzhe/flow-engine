import { ProcessEngine } from './ProcessEngine'
import { ProcessEngineInfo } from './ProcessEngineInfo'
import { ProcessEngineConfig } from './ProcessEngineConfig'

export class ProcessEngines {
  static logger = console
  static isInitialized: boolean = false
  // static isInitialising: boolean = false
  static initializationError: Error | null = null
  static processEngines: Map<string, ProcessEngine> = new Map()
  static processEngineInfosByName: Map<string, ProcessEngineInfo> = new Map()
  static processEngineInfosByResourceUrl: Map<string, ProcessEngineInfo> = new Map()
  static processEngineInfos: ProcessEngineInfo[]
  static async init() {
    if (this.isInitialized) {
      return
    }

    // 读取配置文件
    // 读取流程定义资源
    // 初始化流程定义
    // this.initProcessEngineFromResource()
    this.isInitialized = true
  }

  static async initProcessEngineFromResource(resourceUrl: string) {
    try {
      this.logger.info("initializing process engine for resource {}", resourceUrl)
      const processEngine = await this.buildProcessEngine()
      const processEngineName = processEngine.name
      this.logger.info("initialised process engine {}", processEngineName)
      const processEngineInfo = new ProcessEngineInfo(processEngineName, resourceUrl)
      this.processEngines.set(processEngineName, processEngine)
      this.processEngineInfosByName.set(processEngineName, processEngineInfo)
      this.processEngineInfosByResourceUrl.set(resourceUrl, processEngineInfo)
      this.processEngineInfos.push(processEngineInfo)
      return processEngineInfo
    } catch (error) {
      this.logger.error("Exception while initializing process engine: {}", error.getMessage(), error)
    }
  }

  static getProcessEngine(processEngineName: string): ProcessEngine {
    if (!this.isInitialized) {
      throw new Error('ProcessEngine has not isInitialized')
    }

    return this.processEngines.get(processEngineName)
  }

  private static async buildProcessEngine(): Promise<ProcessEngine> {
    return ProcessEngineConfig.createProcessEngineConfigFromResourceDefault().buildProcessEngine()
  }
}
