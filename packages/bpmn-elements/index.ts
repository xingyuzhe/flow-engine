import { BpmnModdleOrigin, loadBpmnXml, getLocalName } from './moddle'
import { ActivitiesMap } from './activities'

import{ ModdleContextSerializer }  from './moddle/ModdleContextSerializer'
// import * as Behavior from './behavior'

export * from './moddle'
// export * from './activities'

const TestProcessData = {
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


async function test() {
  const moddleContext = await loadBpmnXml('simple.bpmn')
  const serializedModdleContext = ModdleContextSerializer.serialize(moddleContext, ActivitiesMap)
  const process = serializedModdleContext.getExecutableProcesses()
  console.log(process)
  const firstExuction = TestProcessData.excutions[0]
  const currentFlowElement = serializedModdleContext.getActivityById(firstExuction.activityId)
  console.log(currentFlowElement)
}

test()
