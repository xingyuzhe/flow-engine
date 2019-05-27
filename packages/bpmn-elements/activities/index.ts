import { Definitions } from './Definitions'
import { Process } from './Process'
import { StartEvent } from './StartEvent'
import { EndEvent } from './EndEvent'
import { SequenceFlow } from './SequenceFlow'
import { ExclusiveGateway } from './ExclusiveGateway'
import { InclusiveGateway } from './InclusiveGateway'
import { ParallelGateway } from './ParallelGateway'
import { Task} from './Task'
import { UserTask } from './UserTask'
import { ScriptTask } from './ScriptTask'

// export interface IActivitiesMap {
//   Definitions: typeof Definitions,
//   Process: typeof  Process,
//   StartEvent: typeof  StartEvent,
//   EndEvent: typeof  EndEvent,
//   SequenceFlow: typeof  SequenceFlow,
//   ExclusiveGateway: typeof  ExclusiveGateway,
//   InclusiveGateway: typeof  InclusiveGateway,
//   ParallelGateway: typeof  ParallelGateway,
//   Task: typeof  Task,
//   UserTask: typeof  UserTask,
//   ScriptTask: typeof  ScriptTask
// }

export const ActivitiesMap = {
  Definitions,
  Process,
  StartEvent,
  EndEvent,
  SequenceFlow,
  ExclusiveGateway,
  InclusiveGateway,
  ParallelGateway,
  Task,
  UserTask,
  ScriptTask
}
