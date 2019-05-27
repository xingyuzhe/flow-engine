export enum BpmnEventsNames {
  TOKEN_ARRIVED_EVENT = "TOKEN_ARRIVED_EVENT",
  ACTIVITY_END_EVENT = "ACTIVITY_END_EVENT",
  INTERMEDIATE_CATCH_EVENT = "INTERMEDIATE_CATCH_EVENT",
  BOUNDARY_CATCH_EVENT = "BOUNDARY_CATCH_EVENT"
}

export enum FlowMethodNames {
  STEP = 'step',
  RUN = 'run',
  AUTO = 'auto',
  SIGNAL = 'signal',
  BACK = 'back',
  GOTO = 'goto',
  RESET = 'reset'
}

export const ActivityEndHandlerPostfix = 'Done'
