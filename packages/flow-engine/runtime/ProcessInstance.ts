import { Execution } from './Execution'
import { CallActivityToken } from '../state/CallActivityToken'
import { State } from '../state/State'
import { IHistoryData } from '../schema'

interface IProcessInstanceParams {
  processInstanceId: number, 
  processDefinition: any, 
  eventHandler: any, 
  persistency: any,
  parentProcess: ProcessInstance, 
  parentToken: CallActivityToken, 
  parentHistoryEntry: IHistoryData
}

interface IEventHandlerParams {
  eventType: string, 
  currentFlowObjectName: string, 
  handlerName: string, 
  reason: string
}

function defaultErrorHandler(error: Error) {
  console.log("Unhandled error: '" + error + "' Stack trace: " + error.stack)
}

function defaultEventHandler(eventHandlerParam: IEventHandlerParams, done: any) {
  if (done) {
      done()
  }
};

export class ProcessInstance extends Execution {
  processInstanceId: number
  processDefinition: any
  eventHandler: any
  persistency: any
  parentProcess: ProcessInstance
  parentToken: CallActivityToken
  parentHistoryEntry: IHistoryData
  deferredEvents: any[]
  deferEvents: any
  participants: Map<string, ProcessInstance>
  properties: any
  calledProcesses: Map<string, ProcessInstance>
  currentTransaction: any

  constructor(processInstanceParams: IProcessInstanceParams) {
    super(processInstanceParams.processInstanceId)

    this.processInstanceId = processInstanceParams.processInstanceId
    this.processDefinition = processInstanceParams.processDefinition
    this.eventHandler = processInstanceParams.eventHandler
    this.parentProcess = processInstanceParams.parentProcess
    // this.pendingTimerEvents = new BPMNPendingTimerEvents(this);
    this.persistency = processInstanceParams.persistency
    this.deferredEvents = []
    // events must be deferred if the process engine is loading or saving state
    this.deferEvents = false
    // this.processClient = new BPMNProcessClient(this);
    // if the process takes part in a collaboration, we store all participant process in this map
    this.participants = new Map()
    // TODO: how do we handle parent data?
    this.properties = new Map()
    this.calledProcesses = new Map()

    const { parentToken, parentHistoryEntry, eventHandler } = processInstanceParams

    // this.currentTransaction = null;
    // this.views = {
    //     startEvent: null,
    //     endEvent: null,
    //     duration: null
    // };

    // if (parentToken) {
    //     this.state = new State(parentToken.substate)
    //     parentToken.substate = this.state
    //     this.parentToken = parentToken
    // } else {
    //     this.state = new State()
    // }

    // if (parentHistoryEntry) {
    //     this.history = new BPMNProcessHistory(parentHistoryEntry.subhistory);
    //     parentHistoryEntry.subhistory = this.history;
    // } else {
    //     this.history = new BPMNProcessHistory();
    // }

    // this.defaultEventHandler = eventHandler.defaultEventHandler || defaultEventHandler
    // this.defaultErrorHandler = eventHandler.defaultErrorHandler || defaultErrorHandler
    // this.doneSavingHandler = eventHandler.doneSavingHandler
    // this.doneLoadingHandler = eventHandler.doneLoadingHandler
    // this.onBeginHandler = eventHandler.onBeginHandler
    // this.onEndHandler = eventHandler.onEndHandler

    this.registerOnTokenArrivedEvent()
    this.registerActivityEndEvents()
    this.registerThrowIntermediateEvents()
    this.registerThrowBoundaryEvents()
  }

  isMainProcess() {
    return !this.parentProcess
  }

  getProcessDefinition() {
    return this.processDefinition
  }

  getCurrentTransaction() {
    return this.currentTransaction
  }

  // triggerEvent(flowNodeName: string, data: any) {
  //   const flowObject = this.processDefinition.getFlowObjectByName(flowNodeName)
  //   var taskDoneMatch = _s.endsWith(eventName, activityEndHandlerPostfix);

  //   if (flowObject) {

  //       this.logger.trace("Trigger " + flowObject.type + " '" + flowObject.name + "'", data);

  //       if (flowObject.isStartEvent) {
  //           if (self.history.hasBeenVisited(eventName)) {
  //               throw new Error("The start event '" + eventName + "' cannot start an already started process.");
  //           } else {
  //               // start events create a token and put it on the first occurrence
  //               self._putTokenAt(flowObject, data);
  //           }
  //       } else if (flowObject.isIntermediateCatchEvent) {
  //           process.nextTick(function() {
  //               // We need this to achieve parallel collaborating processes
  //               // TODO: however, it is not completely clear to me whether this works in all circumstances
  //               self._emitEvent(INTERMEDIATE_CATCH_EVENT, eventName, data);
  //           });
  //       } else if (flowObject.isBoundaryEvent) {
  //           self._emitEvent(BOUNDARY_CATCH_EVENT, eventName, data);
  //       } else {
  //           throw new Error("The process '" + processDefinition.name + "' has no intermediate catch event for '" + eventName + "'");
  //       }
  //   } else if (taskDoneMatch) {
  //       flowObjectName = _s.strLeft(eventName, activityEndHandlerPostfix);
  //       flowObject = processDefinition.getFlowObjectByName(flowObjectName);

  //       if (flowObject && flowObject.isWaitTask) {
  //           self.taskDone(flowObjectName, data);
  //       } else {
  //           throw new Error("The process '" + processDefinition.name + "' does not know the event '" + eventName + "'");
  //       }
  //   } else {
  //       throw new Error("The process '" + processDefinition.name + "' does not know the event '" + eventName + "'");
  //   }
  // }

  /**
   * 获取当前状态下可能发生的transition
   */
  getCurrentPossibleTransitions() {
    //
  }

  /**
   * 是否可以发生转换
   */
  isCanTransition2toState() {
    //
  }

  /**
   * 根据类型获取当前状态下可能发生的transition
   */
  getPossibleTransitionsByNames() {
    //
  }

  /**
   * 查找下一步可能的transition, 如果只有一个transition并且name是auto, 返回true 否则返回false
   */
  isNextAutoOnlyTransitions() {
    //
  }

  private registerOnTokenArrivedEvent() {
    //
  }
  private registerActivityEndEvents() {
    //
  }
  private registerThrowIntermediateEvents() {
    //
  }
  private registerThrowBoundaryEvents() {
    //
  }
}
