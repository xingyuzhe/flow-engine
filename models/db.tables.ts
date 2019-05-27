// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  actEvtLog:def.actEvtLogModel;
  actGeBytearray:def.actGeBytearrayModel;
  actGeProperty:def.actGePropertyModel;
  actProcdefInfo:def.actProcdefInfoModel;
  actReDeployment:def.actReDeploymentModel;
  actReModel:def.actReModelModel;
  actReProcdef:def.actReProcdefModel;
  actRuDeadletterJob:def.actRuDeadletterJobModel;
  actRuEventSubscr:def.actRuEventSubscrModel;
  actRuExecution:def.actRuExecutionModel;
  actRuIdentitylink:def.actRuIdentitylinkModel;
  actRuTimerJob:def.actRuTimerJobModel;
  actRuTask:def.actRuTaskModel;
  actRuJob:def.actRuJobModel;
  actRuSuspendedJob:def.actRuSuspendedJobModel;
  actRuIntegration:def.actRuIntegrationModel;
  actRuVariable:def.actRuVariableModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    actEvtLog: seq.import(path.join(__dirname, './ACT_EVT_LOG')),
    actGeBytearray: seq.import(path.join(__dirname, './ACT_GE_BYTEARRAY')),
    actGeProperty: seq.import(path.join(__dirname, './ACT_GE_PROPERTY')),
    actProcdefInfo: seq.import(path.join(__dirname, './ACT_PROCDEF_INFO')),
    actReDeployment: seq.import(path.join(__dirname, './ACT_RE_DEPLOYMENT')),
    actReModel: seq.import(path.join(__dirname, './ACT_RE_MODEL')),
    actReProcdef: seq.import(path.join(__dirname, './ACT_RE_PROCDEF')),
    actRuDeadletterJob: seq.import(path.join(__dirname, './ACT_RU_DEADLETTER_JOB')),
    actRuEventSubscr: seq.import(path.join(__dirname, './ACT_RU_EVENT_SUBSCR')),
    actRuExecution: seq.import(path.join(__dirname, './ACT_RU_EXECUTION')),
    actRuIdentitylink: seq.import(path.join(__dirname, './ACT_RU_IDENTITYLINK')),
    actRuTimerJob: seq.import(path.join(__dirname, './ACT_RU_TIMER_JOB')),
    actRuTask: seq.import(path.join(__dirname, './ACT_RU_TASK')),
    actRuJob: seq.import(path.join(__dirname, './ACT_RU_JOB')),
    actRuSuspendedJob: seq.import(path.join(__dirname, './ACT_RU_SUSPENDED_JOB')),
    actRuIntegration: seq.import(path.join(__dirname, './ACT_RU_INTEGRATION')),
    actRuVariable: seq.import(path.join(__dirname, './ACT_RU_VARIABLE')),
  };
  return tables;
};
