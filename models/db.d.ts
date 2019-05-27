// tslint:disable
import * as Sequelize from 'sequelize';


// table: actEvtLog
export interface actEvtLogAttribute {
  logNr:number;
  type?:string;
  procDefId?:string;
  procInstId?:string;
  executionId?:string;
  taskId?:string;
  timeStamp:Date;
  userId?:string;
  data?:any;
  lockOwner?:string;
  lockTime?:Date;
  isProcessed?:number;
}
export interface actEvtLogInstance extends Sequelize.Instance<actEvtLogAttribute>, actEvtLogAttribute { }
export interface actEvtLogModel extends Sequelize.Model<actEvtLogInstance, actEvtLogAttribute> { }

// table: actGeBytearray
export interface actGeBytearrayAttribute {
  id:string;
  rev?:number;
  name?:string;
  deploymentId?:string;
  bytes?:any;
  generated?:number;
}
export interface actGeBytearrayInstance extends Sequelize.Instance<actGeBytearrayAttribute>, actGeBytearrayAttribute { }
export interface actGeBytearrayModel extends Sequelize.Model<actGeBytearrayInstance, actGeBytearrayAttribute> { }

// table: actGeProperty
export interface actGePropertyAttribute {
  name:string;
  value?:string;
  rev?:number;
}
export interface actGePropertyInstance extends Sequelize.Instance<actGePropertyAttribute>, actGePropertyAttribute { }
export interface actGePropertyModel extends Sequelize.Model<actGePropertyInstance, actGePropertyAttribute> { }

// table: actProcdefInfo
export interface actProcdefInfoAttribute {
  id:string;
  procDefId:string;
  rev?:number;
  infoJsonId?:string;
}
export interface actProcdefInfoInstance extends Sequelize.Instance<actProcdefInfoAttribute>, actProcdefInfoAttribute { }
export interface actProcdefInfoModel extends Sequelize.Model<actProcdefInfoInstance, actProcdefInfoAttribute> { }

// table: actReDeployment
export interface actReDeploymentAttribute {
  id:string;
  name?:string;
  category?:string;
  key?:string;
  tenantId?:string;
  deployTime?:Date;
  engineVersion?:string;
}
export interface actReDeploymentInstance extends Sequelize.Instance<actReDeploymentAttribute>, actReDeploymentAttribute { }
export interface actReDeploymentModel extends Sequelize.Model<actReDeploymentInstance, actReDeploymentAttribute> { }

// table: actReModel
export interface actReModelAttribute {
  id:string;
  rev?:number;
  name?:string;
  key?:string;
  category?:string;
  createTime?:Date;
  lastUpdateTime?:Date;
  version?:number;
  metaInfo?:string;
  deploymentId?:string;
  editorSourceValueId?:string;
  editorSourceExtraValueId?:string;
  tenantId?:string;
}
export interface actReModelInstance extends Sequelize.Instance<actReModelAttribute>, actReModelAttribute { }
export interface actReModelModel extends Sequelize.Model<actReModelInstance, actReModelAttribute> { }

// table: actReProcdef
export interface actReProcdefAttribute {
  id:string;
  rev?:number;
  category?:string;
  name?:string;
  key:string;
  version:number;
  deploymentId?:string;
  resourceName?:string;
  dgrmResourceName?:string;
  description?:string;
  hasStartFormKey?:number;
  hasGraphicalNotation?:number;
  suspensionState?:number;
  tenantId?:string;
  engineVersion?:string;
}
export interface actReProcdefInstance extends Sequelize.Instance<actReProcdefAttribute>, actReProcdefAttribute { }
export interface actReProcdefModel extends Sequelize.Model<actReProcdefInstance, actReProcdefAttribute> { }

// table: actRuDeadletterJob
export interface actRuDeadletterJobAttribute {
  id:string;
  rev?:number;
  type:string;
  exclusive?:number;
  executionId?:string;
  processInstanceId?:string;
  procDefId?:string;
  exceptionStackId?:string;
  exceptionMsg?:string;
  duedate?:Date;
  repeat?:string;
  handlerType?:string;
  handlerCfg?:string;
  tenantId?:string;
}
export interface actRuDeadletterJobInstance extends Sequelize.Instance<actRuDeadletterJobAttribute>, actRuDeadletterJobAttribute { }
export interface actRuDeadletterJobModel extends Sequelize.Model<actRuDeadletterJobInstance, actRuDeadletterJobAttribute> { }

// table: actRuEventSubscr
export interface actRuEventSubscrAttribute {
  id:string;
  rev?:number;
  eventType:string;
  eventName?:string;
  executionId?:string;
  procInstId?:string;
  activityId?:string;
  configuration?:string;
  created:Date;
  procDefId?:string;
  tenantId?:string;
}
export interface actRuEventSubscrInstance extends Sequelize.Instance<actRuEventSubscrAttribute>, actRuEventSubscrAttribute { }
export interface actRuEventSubscrModel extends Sequelize.Model<actRuEventSubscrInstance, actRuEventSubscrAttribute> { }

// table: actRuExecution
export interface actRuExecutionAttribute {
  id:string;
  rev?:number;
  procInstId?:string;
  businessKey?:string;
  parentId?:string;
  procDefId?:string;
  superExec?:string;
  rootProcInstId?:string;
  actId?:string;
  isActive?:number;
  isConcurrent?:number;
  isScope?:number;
  isEventScope?:number;
  isMiRoot?:number;
  suspensionState?:number;
  cachedEntState?:number;
  tenantId?:string;
  name?:string;
  startTime?:Date;
  startUserId?:string;
  lockTime?:Date;
  isCountEnabled?:number;
  evtSubscrCount?:number;
  taskCount?:number;
  jobCount?:number;
  timerJobCount?:number;
  suspJobCount?:number;
  deadletterJobCount?:number;
  varCount?:number;
  idLinkCount?:number;
}
export interface actRuExecutionInstance extends Sequelize.Instance<actRuExecutionAttribute>, actRuExecutionAttribute { }
export interface actRuExecutionModel extends Sequelize.Model<actRuExecutionInstance, actRuExecutionAttribute> { }

// table: actRuIdentitylink
export interface actRuIdentitylinkAttribute {
  id:string;
  rev?:number;
  groupId?:string;
  type?:string;
  userId?:string;
  taskId?:string;
  procInstId?:string;
  procDefId?:string;
}
export interface actRuIdentitylinkInstance extends Sequelize.Instance<actRuIdentitylinkAttribute>, actRuIdentitylinkAttribute { }
export interface actRuIdentitylinkModel extends Sequelize.Model<actRuIdentitylinkInstance, actRuIdentitylinkAttribute> { }

// table: actRuTimerJob
export interface actRuTimerJobAttribute {
  id:string;
  rev?:number;
  type:string;
  lockExpTime?:Date;
  lockOwner?:string;
  exclusive?:number;
  executionId?:string;
  processInstanceId?:string;
  procDefId?:string;
  retries?:number;
  exceptionStackId?:string;
  exceptionMsg?:string;
  duedate?:Date;
  repeat?:string;
  handlerType?:string;
  handlerCfg?:string;
  tenantId?:string;
}
export interface actRuTimerJobInstance extends Sequelize.Instance<actRuTimerJobAttribute>, actRuTimerJobAttribute { }
export interface actRuTimerJobModel extends Sequelize.Model<actRuTimerJobInstance, actRuTimerJobAttribute> { }

// table: actRuTask
export interface actRuTaskAttribute {
  id:string;
  rev?:number;
  executionId?:string;
  procInstId?:string;
  procDefId?:string;
  name?:string;
  parentTaskId?:string;
  description?:string;
  taskDefKey?:string;
  owner?:string;
  assignee?:string;
  delegation?:string;
  priority?:number;
  createTime?:Date;
  dueDate?:Date;
  category?:string;
  suspensionState?:number;
  tenantId?:string;
  formKey?:string;
  claimTime?:Date;
}
export interface actRuTaskInstance extends Sequelize.Instance<actRuTaskAttribute>, actRuTaskAttribute { }
export interface actRuTaskModel extends Sequelize.Model<actRuTaskInstance, actRuTaskAttribute> { }

// table: actRuJob
export interface actRuJobAttribute {
  id:string;
  rev?:number;
  type:string;
  lockExpTime?:Date;
  lockOwner?:string;
  exclusive?:number;
  executionId?:string;
  processInstanceId?:string;
  procDefId?:string;
  retries?:number;
  exceptionStackId?:string;
  exceptionMsg?:string;
  duedate?:Date;
  repeat?:string;
  handlerType?:string;
  handlerCfg?:string;
  tenantId?:string;
}
export interface actRuJobInstance extends Sequelize.Instance<actRuJobAttribute>, actRuJobAttribute { }
export interface actRuJobModel extends Sequelize.Model<actRuJobInstance, actRuJobAttribute> { }

// table: actRuSuspendedJob
export interface actRuSuspendedJobAttribute {
  id:string;
  rev?:number;
  type:string;
  exclusive?:number;
  executionId?:string;
  processInstanceId?:string;
  procDefId?:string;
  retries?:number;
  exceptionStackId?:string;
  exceptionMsg?:string;
  duedate?:Date;
  repeat?:string;
  handlerType?:string;
  handlerCfg?:string;
  tenantId?:string;
}
export interface actRuSuspendedJobInstance extends Sequelize.Instance<actRuSuspendedJobAttribute>, actRuSuspendedJobAttribute { }
export interface actRuSuspendedJobModel extends Sequelize.Model<actRuSuspendedJobInstance, actRuSuspendedJobAttribute> { }

// table: actRuIntegration
export interface actRuIntegrationAttribute {
  id:string;
  executionId?:string;
  processInstanceId?:string;
  procDefId?:string;
  flowNodeId?:string;
  createdDate:Date;
}
export interface actRuIntegrationInstance extends Sequelize.Instance<actRuIntegrationAttribute>, actRuIntegrationAttribute { }
export interface actRuIntegrationModel extends Sequelize.Model<actRuIntegrationInstance, actRuIntegrationAttribute> { }

// table: actRuVariable
export interface actRuVariableAttribute {
  id:string;
  rev?:number;
  type:string;
  name:string;
  executionId?:string;
  procInstId?:string;
  taskId?:string;
  bytearrayId?:string;
  double?:any;
  long?:number;
  text?:string;
  text2?:string;
}
export interface actRuVariableInstance extends Sequelize.Instance<actRuVariableAttribute>, actRuVariableAttribute { }
export interface actRuVariableModel extends Sequelize.Model<actRuVariableInstance, actRuVariableAttribute> { }
