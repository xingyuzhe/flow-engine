import { FlowElement } from './FlowElement'

export class BoundaryEvent extends FlowElement {
  protected interrupting: boolean

  constructor(interrupting: boolean = false) {
    super()
    this.interrupting = interrupting
  }

  isInterrupting() {
    return this.interrupting
  }

  setInterrupting(interrupting: boolean) {
    this.interrupting = interrupting
  }

  execute(execution: any) {
    // Overridden by subclasses
  }

  trigger(execution: any, triggerName: string, triggerData: any) {
    if (this.interrupting) {
      this.executeInterruptingBehavior(execution)
    } else {
      this.executeNonInterruptingBehavior(execution)
    }
  }

  protected executeInterruptingBehavior(executionEntity: any) {

    // The destroy scope operation will look for the parent execution and
    // destroy the whole scope, and leave the boundary event using this parent execution.
    //
    // The take outgoing seq flows operation below (the non-interrupting else clause) on the other hand uses the
    // child execution to leave, which keeps the scope alive.
    // Which is what we need here.

    // ExecutionEntityManager executionEntityManager = commandContext.getExecutionEntityManager();
    // ExecutionEntity attachedRefScopeExecution = executionEntityManager.findById(executionEntity.getParentId());

    // ExecutionEntity parentScopeExecution = null;
    // ExecutionEntity currentlyExaminedExecution = executionEntityManager.findById(attachedRefScopeExecution.getParentId());
    // while (currentlyExaminedExecution != null && parentScopeExecution == null) {
    //   if (currentlyExaminedExecution.isScope()) {
    //     parentScopeExecution = currentlyExaminedExecution;
    //   } else {
    //     currentlyExaminedExecution = executionEntityManager.findById(currentlyExaminedExecution.getParentId());
    //   }
    // }

    // if (parentScopeExecution == null) {
    //   throw new ActivitiException("Programmatic error: no parent scope execution found for boundary event");
    // }

    // deleteChildExecutions(attachedRefScopeExecution, executionEntity, commandContext);

    // // set new parent for boundary event execution
    // executionEntity.setParent(parentScopeExecution);

    // Context.getAgenda().planTakeOutgoingSequenceFlowsOperation(executionEntity, true);
  }

  protected executeNonInterruptingBehavior(executionEntity: any) {

    // Non-interrupting: the current execution is given the first parent
    // scope (which isn't its direct parent)
    //
    // Why? Because this execution does NOT have anything to do with
    // the current parent execution (the one where the boundary event is on): when it is deleted or whatever,
    // this does not impact this new execution at all, it is completely independent in that regard.

    // Note: if the parent of the parent does not exists, this becomes a concurrent execution in the process instance!

    // ExecutionEntityManager executionEntityManager = commandContext.getExecutionEntityManager();

    // ExecutionEntity parentExecutionEntity = executionEntityManager.findById(executionEntity.getParentId());

    // ExecutionEntity scopeExecution = null;
    // ExecutionEntity currentlyExaminedExecution = executionEntityManager.findById(parentExecutionEntity.getParentId());
    // while (currentlyExaminedExecution != null && scopeExecution == null) {
    //   if (currentlyExaminedExecution.isScope()) {
    //     scopeExecution = currentlyExaminedExecution;
    //   } else {
    //     currentlyExaminedExecution = executionEntityManager.findById(currentlyExaminedExecution.getParentId());
    //   }
    // }

    // if (scopeExecution == null) {
    //   throw new ActivitiException("Programmatic error: no parent scope execution found for boundary event");
    // }

    // ExecutionEntity nonInterruptingExecution = executionEntityManager.createChildExecution(scopeExecution);
    // nonInterruptingExecution.setCurrentFlowElement(executionEntity.getCurrentFlowElement());

    // Context.getAgenda().planTakeOutgoingSequenceFlowsOperation(nonInterruptingExecution, true);
  }

  protected deleteChildExecutions(parentExecution: any, notToDeleteExecution: any, commandContext: any) {

    // TODO: would be good if this deleteChildExecutions could be removed and the one on the executionEntityManager is used
    // The problem however, is that the 'notToDeleteExecution' is passed here.
    // This could be solved by not reusing an execution, but creating a new

    // Delete all child executions
    // ExecutionEntityManager executionEntityManager = commandContext.getExecutionEntityManager();
    // Collection<ExecutionEntity> childExecutions = executionEntityManager.findChildExecutionsByParentExecutionId(parentExecution.getId());
    // if (CollectionUtil.isNotEmpty(childExecutions)) {
    //   for (ExecutionEntity childExecution : childExecutions) {
    //     if (childExecution.getId().equals(notToDeleteExecution.getId()) == false) {
    //       deleteChildExecutions(childExecution, notToDeleteExecution, commandContext);
    //     }
    //   }
    // }

    // String deleteReason = DeleteReason.BOUNDARY_EVENT_INTERRUPTING + " (" + notToDeleteExecution.getCurrentActivityId() + ")";
    // if (parentExecution.getCurrentFlowElement() instanceof CallActivity) {
    //   ExecutionEntity subProcessExecution = executionEntityManager.findSubProcessInstanceBySuperExecutionId(parentExecution.getId());
    //   if (subProcessExecution != null) {
    //     executionEntityManager.deleteProcessInstanceExecutionEntity(subProcessExecution.getId(),
    //         subProcessExecution.getCurrentActivityId(), deleteReason, true, true);
    //   }
    // }

    // executionEntityManager.deleteExecutionAndRelatedData(parentExecution, deleteReason, false);
  }
}
