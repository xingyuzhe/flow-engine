import { BpmnModdleOrigin } from '../moddle'
import { BaseElement } from './BaseElement'

export class FlowElement extends BaseElement {
  takeAll() {
    //
  }

  /**
   * Default behaviour: just leave the activity with no extra functionality.
   */
  execute(execution: any) {
    this.leave(execution)
  }

  /**
   * Default way of leaving a BPMN 2.0 activity: evaluate the conditions on the outgoing sequence flow and take those that evaluate to true.
   */
  leave(execution: any) {
    this.performDefaultOutgoingBehavior(execution)
  }

  leaveIgnoreConditions(execution: any) {
    this.performIgnoreConditionsOutgoingBehavior(execution)
  }

  trigger(execution: any, signalName: string, signalData: object) {
    // concrete activity behaviours that do accept signals should override this method;
    throw new Error("this activity isn't waiting for a trigger")
  }  

  /**
   * Performs the default outgoing BPMN 2.0 behavior, which is having parallel paths of executions for the outgoing sequence flow.
   * <p>
   * More precisely: every sequence flow that has a condition which evaluates to true (or which doesn't have a condition), is selected for continuation of the process instance. If multiple sequencer
   * flow are selected, multiple, parallel paths of executions are created.
   */
  performDefaultOutgoingBehavior(activityExecution: any) {
    this.performOutgoingBehavior(activityExecution, true, false)
  }

  /**
   * Performs the default outgoing BPMN 2.0 behavior (@see {@link #performDefaultOutgoingBehavior(ExecutionEntity)}), but without checking the conditions on the outgoing sequence flow.
   * <p>
   * This means that every outgoing sequence flow is selected for continuing the process instance, regardless of having a condition or not. In case of multiple outgoing sequence flow, multiple
   * parallel paths of executions will be created.
   */
  performIgnoreConditionsOutgoingBehavior(activityExecution: any) {
    this.performOutgoingBehavior(activityExecution, false, false)
  }

  /**
   * Actual implementation of leaving an activity.
   * @param execution The current execution context
   * @param checkConditions Whether or not to check conditions before determining whether or not to take a transition.
   * @param throwExceptionIfExecutionStuck If true, an {@link ActivitiException} will be thrown in case no transition could be found to leave the activity.
   */
  protected performOutgoingBehavior(execution: any, checkConditions: boolean, throwExceptionIfExecutionStuck: boolean) {
    // Context.getAgenda().planTakeOutgoingSequenceFlowsOperation(execution, true);
    throw Error(`this method should be implemented`)
  }

  protected init() {
    //
  }
}
