import { ProcessEngine } from './ProcessEngine'
import { ProcessInstance } from './runtime/ProcessInstance'
import { ProcessDefinition } from './repository/ProcessDefinition'
import { ProcessEngineConfig } from './ProcessEngineConfig'
import * as BpmnElements from '../bpmn-elements'

const TestProcessData = {
  processDefineId: 'Definitions_000d5g1',
  processInstanceId: 100,
  excutions: [{
    excutionId: 10,
    processInstanceId: 100,
    activityId: 'Task_0js31eu',
  }],
  tasks: [{
    id: 'Task_0js31eu',
    name: '复审'
  }]
}

class Demo {
  static async run() {
    // 初始化流程引擎
    const processEngine = this.getProcessEngine()
    // 初始化流程定义文件
    const processDefinitions = await this.loadProcessDefinitions(processEngine)
    // 取一种流程定义并启动一个流程
    const processInstance = processEngine.getRuntimeService().startProcessInstanceById(TestProcessData.processInstanceId)
    // 处理流程任务
    this.processTask(processEngine, processInstance)
  }

  static async execute() {
    const processEngine = this.getProcessEngine()
    const processDefinitions = await this.loadProcessDefinitions(processEngine)
    const processDefinition = processDefinitions.get(TestProcessData.processDefineId)
    console.log(processDefinition)
  }

  private static async processTask(processEngine: ProcessEngine, processInstance: ProcessInstance) {
    console.info(`processInstanceId: ${processInstance.id}`)
    // const taskService = processEngine.getTaskService()
    const context = await BpmnElements.loadBpmnXml('simple.bpmn')

    const currentActiveTask = {
      id: 'Task_0js31eu',
      name: '复审'
    }

    const currentFlowElement = context.elementsById[currentActiveTask.id]
    console.log('-----', currentFlowElement)
  }

  private static async loadProcessDefinitions(processEngine: ProcessEngine): Promise<Map<string, ProcessDefinition>> {
    const repositoryService = processEngine.getRepositoryService()
    const deploymentBuilder = repositoryService.createDeployment()
    const deployment = await deploymentBuilder.deploy('1.bpmn')

    return deployment.definitions
  }

  private static getProcessEngine(): ProcessEngine {
    const configuration = ProcessEngineConfig.createProcessEngineConfigFromResourceDefault()
    const processEngine = configuration.buildProcessEngine()

    console.info(`流程引擎名称: ${processEngine.name}, 版本: ${processEngine.version}`)
    return processEngine
  }
}

Demo.execute()
