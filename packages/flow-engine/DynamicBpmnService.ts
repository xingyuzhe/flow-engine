/** Service providing access to the repository of process definitions and deployments.
 * 
 */
type FlowElement = any
export interface IDynamicBpmnService {

  getProcessDefinitionInfo(processDefinitionId: string): FlowElement
  
  saveProcessDefinitionInfo(processDefinitionId: string, infoNode: FlowElement): void
  
  changeServiceTaskClassName(id: string, className: string): FlowElement
  
  changeServiceTaskClassName(id: string, className: string, infoNode: FlowElement): void
  
  changeServiceTaskExpression(id: string, expression: string): FlowElement
  
  changeServiceTaskExpression(id: string, expression: string, infoNode: FlowElement): void
  
  changeServiceTaskDelegateExpression(id: string, expression: string): FlowElement
  
  changeServiceTaskDelegateExpression(id: string, expression: string, infoNode: FlowElement): void
  
  changeScriptTaskScript(id: string, script: string): FlowElement
  
  changeScriptTaskScript(id: string, script: string , infoNode: FlowElement): void
  
  changeUserTaskName(id: string, name: string ): FlowElement
  
  changeUserTaskName(id: string, name: string , infoNode: FlowElement): void
  
  changeUserTaskDescription(id: string, description: string ): FlowElement
  
  changeUserTaskDescription(id: string, description: string , infoNode: FlowElement): void
  
  changeUserTaskDueDate(id: string, dueDate: string ): FlowElement
  
  changeUserTaskDueDate(id: string, dueDate: string , infoNode: FlowElement): void
  
  changeUserTaskPriority(id: string, priority: string ): FlowElement
  
  changeUserTaskPriority(id: string, priority: string , infoNode: FlowElement): void
  
  changeUserTaskCategory(id: string, category: string ): FlowElement
  
  changeUserTaskCategory(id: string, category: string , infoNode: FlowElement): void
  
  changeUserTaskFormKey(id: string, formKey: string ): FlowElement
  
  changeUserTaskFormKey(id: string, formKey: string , infoNode: FlowElement): void
  
  changeUserTaskAssignee(id: string, assignee: string ): FlowElement
  
  changeUserTaskAssignee(id: string, assignee: string , infoNode: FlowElement): void
  
  changeUserTaskOwner(id: string, owner: string ): FlowElement
  
  changeUserTaskOwner(id: string, owner: string , infoNode: FlowElement): void
  
  changeUserTaskCandidateUser(id: string, candidateUser: string , overwriteOtherChangedEntries: boolean): FlowElement
  
  changeUserTaskCandidateUser(id: string, candidateUser: string , overwriteOtherChangedEntries: boolean, infoNode: FlowElement): void

  changeUserTaskCandidateGroup(id: string, candidateGroup: string , overwriteOtherChangedEntries: boolean): FlowElement
  
  changeUserTaskCandidateGroup(id: string, candidateGroup: string , overwriteOtherChangedEntries: boolean, infoNode: FlowElement): void
  
  changeDmnTaskDecisionTableKey(id: string, decisionTableKey: string ): FlowElement

  changeDmnTaskDecisionTableKey(id: string, decisionTableKey: string , infoNode: FlowElement): void
  
  changeSequenceFlowCondition(id: string, condition: string ): FlowElement
  
  changeSequenceFlowCondition(id: string, condition: string , infoNode: FlowElement): void
  
  getBpmnElementProperties(id: string, infoNode: FlowElement): FlowElement
  
  changeLocalizationName(language: string, id: string, value: string): void
  
  changeLocalizationName(language: string, id: string, value: string, infoNode: FlowElement): FlowElement
  
  changeLocalizationDescription(language: string, id: string, value: string): void
  
  changeLocalizationDescription(language: string, id: string, value: string, infoNode: FlowElement): FlowElement
  
  getLocalizationElementProperties(language: string, id: string, infoNode: FlowElement): void
}


// export class DynamicBpmnService implements IDynamicBpmnService {}
export class DynamicBpmnService {}
