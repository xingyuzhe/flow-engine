import { ProcessInstance } from './runtime/ProcessInstance'

export class RuntimeService {
  /** 
   * Create a {@link ProcessInstanceBuilder}, that allows to set various options for starting a process instance,
   * as an alternative to the various startProcessInstanceByXX methods. 
   */
  createProcessInstanceBuilder() {
    // return new ProcessInstanceBuilder()
  }

  /**
   * 
   * Starts a new process instance in the latest version of the process definition with the given key.
   */
  startProcessInstanceByKey(processDefinitionKey: string) {
    // return new ProcessInstance()
  }

  /**
   * Starts a new process instance in the exactly specified version of the process definition with the given id.
   * @param processDefinitionId 
   */
  startProcessInstanceById(processInstanceId: any) {
    return new ProcessInstance(processInstanceId)
  }

  /**
   * Delete an existing runtime process instance.
   * @param processInstanceId 
   * @param deleteReason 
   */
  deleteProcessInstance(processInstanceId: string, deleteReason: string) {
    return
  }

  /**
   * Finds the activity ids for all executions that are waiting in activities. This is a list because a single activity can be active multiple times.
   * 
   * @param executionId
   *          id of the execution, cannot be null.
   * @throws ActivitiObjectNotFoundException
   *           when no execution exists with the given executionId.
   */
  getActiveActivityIds(executionId: string): string[] {
    return []
  }

  /**
   * All variables visible from the given execution scope (including parent scopes).
   * @param executionId 
   */
  getVariables(executionId: string): Map<string, object> {
    return new Map()
  }

  /**
   * Update or create a variable for an execution.
   * @param executionId 
   * @param variableName 
   * @param value 
   */
  setVariable(executionId: string, variableName: string, value: object) {
    return
  }

  getVariable(executionId: string, variableName: string) {
    return
  }

  hasVariable(executionId: string, variableName: string) {
    return
  }

  removeVariable(executionId: string, variableName: string) {
    return
  }

  /**
   * Creates a new {@link ExecutionQuery} instance, that can be used to query the executions and process instances.
   */
  createExecutionQuery() {
    return
  }

  /**
   * Creates a new {@link ProcessInstanceQuery} instance, that can be used to query process instances.
   */
  createProcessInstanceQuery() {
    return
  }

  suspendProcessInstanceById(processInstanceId: string) {
    return
  }

  activateProcessInstanceById(processInstanceId: string) {
    return
  }

  /**
   * The all events related to the given Process Instance
   * @param processInstanceId 
   */
  getProcessInstanceEvents(processInstanceId: string) {
    return
  }
}
