import { ProcessInstance } from './ProcessInstance'
export class ProcessInstanceBuilder {
  /**
   *  Start the process instance
   */
  start() {
    // query from excution table
    const processData = {
      DefinitionsId: 'Definitions_000d5g1',
      processDefineId: 'Process_0put4gx',
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

    return new  ProcessInstance()
  }
}
