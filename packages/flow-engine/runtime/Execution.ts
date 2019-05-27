import { EventEmitter } from 'events'
export class Execution extends EventEmitter {

  /**
   * The unique identifier of the execution.
   */
  id: number

  /**
   * Indicates if the execution is suspended.
   */
  isSuspended: boolean

  /**
   * Returns the id of the activity where the execution currently is at. Returns null if the execution is not a 'leaf' execution (eg concurrent parent).
   */
  activityId: string

  /**
   * Id of the root of the execution tree representing the process instance. It is the same as {@link #getId()} if this execution is the process instance.
   */
  // processInstanceId: number

  /**
   * Gets the id of the parent of this execution. If null, the execution represents a process-instance.
   */
  parentId: string

  /**
   * Gets the id of the super execution of this execution.
   */
  superExecutionId: string

  /**
   * Id of the root of the execution tree representing the process instance that has no super execution.
   */
  rootProcessInstanceId: string

  /**
   * Returns Id of the process instance related to the super execution of this execution.
   */
  parentProcessInstanceId: string

  /**
   * Returns the name of this execution.
   */
  name: string

  /**
   * Returns the description of this execution.
   */
  description: string

  /* State management */

  /**
   * returns whether this execution is currently active.
   */
  isActive: boolean

  /**
   * returns whether this execution has ended or not.
   */
  isEnded: boolean

  /**
   * returns whether this execution is concurrent or not.
   */
  isConcurrent: boolean

  /**
   * returns whether this execution is a process instance or not.
   */
  isProcessInstanceType: boolean

  /**
   * Returns whether this execution is a scope.
   */
  isScope: boolean

  /**
   * Returns whather this execution is the root of a multi instance execution.
   */
  isMultiInstanceRoot: boolean

  constructor(readonly processInstanceId: number) {
    super()
  }

  /**
   * The BPMN element where the execution currently is at. 
   */
  getCurrentFlowElement() {
    // return this.flowElement
  }

  /**
   * Change the current BPMN element the execution is at. 
   */
  setCurrentFlowElement(flowElement: any) {
    // this.flowElement = flowElement
  }

  /**
   * Returns the {@link ActivitiListener} instance matching an {@link ExecutionListener}
   * if currently an execution listener is being execution. 
   * Returns null otherwise.
   */
  getCurrentActivitiListener() {
    //
  }

  /**
   * Called when an {@link ExecutionListener} is being executed. 
   */
  setCurrentActivitiListener(currentActivitiListener: any) {
    //
  }

  /* Execution management */

  /**
   * returns the parent of this execution, or null if there no parent.
   */
  getParent(): Execution {
    return 1 as any
  }

  /**
   * returns the list of execution of which this execution the parent of.
   */
  getExecutions(): Execution[] {
    return 1 as any
  }

  /**
   * Inactivates this execution. This is useful for example in a join: the execution still exists, but it is not longer active.
   */
  inactivate() {
    //
  }
}
