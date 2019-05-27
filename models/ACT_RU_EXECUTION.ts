/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuExecutionInstance, actRuExecutionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuExecutionInstance, actRuExecutionAttribute>('actRuExecution', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'ID_'
    },
    rev: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'REV_'
    },
    procInstId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RU_EXECUTION',
        key: 'ID_'
      },
      field: 'PROC_INST_ID_'
    },
    businessKey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'BUSINESS_KEY_'
    },
    parentId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RU_EXECUTION',
        key: 'ID_'
      },
      field: 'PARENT_ID_'
    },
    procDefId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RE_PROCDEF',
        key: 'ID_'
      },
      field: 'PROC_DEF_ID_'
    },
    superExec: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RU_EXECUTION',
        key: 'ID_'
      },
      field: 'SUPER_EXEC_'
    },
    rootProcInstId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'ROOT_PROC_INST_ID_'
    },
    actId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ACT_ID_'
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'IS_ACTIVE_'
    },
    isConcurrent: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'IS_CONCURRENT_'
    },
    isScope: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'IS_SCOPE_'
    },
    isEventScope: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'IS_EVENT_SCOPE_'
    },
    isMiRoot: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'IS_MI_ROOT_'
    },
    suspensionState: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'SUSPENSION_STATE_'
    },
    cachedEntState: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'CACHED_ENT_STATE_'
    },
    tenantId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'TENANT_ID_'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME_'
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'START_TIME_'
    },
    startUserId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'START_USER_ID_'
    },
    lockTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LOCK_TIME_'
    },
    isCountEnabled: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'IS_COUNT_ENABLED_'
    },
    evtSubscrCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'EVT_SUBSCR_COUNT_'
    },
    taskCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'TASK_COUNT_'
    },
    jobCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'JOB_COUNT_'
    },
    timerJobCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'TIMER_JOB_COUNT_'
    },
    suspJobCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'SUSP_JOB_COUNT_'
    },
    deadletterJobCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'DEADLETTER_JOB_COUNT_'
    },
    varCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'VAR_COUNT_'
    },
    idLinkCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ID_LINK_COUNT_'
    }
  }, {
    tableName: 'ACT_RU_EXECUTION'
  });
};
