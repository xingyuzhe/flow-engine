/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuTimerJobInstance, actRuTimerJobAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuTimerJobInstance, actRuTimerJobAttribute>('actRuTimerJob', {
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
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'TYPE_'
    },
    lockExpTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LOCK_EXP_TIME_'
    },
    lockOwner: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'LOCK_OWNER_'
    },
    exclusive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'EXCLUSIVE_'
    },
    executionId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RU_EXECUTION',
        key: 'ID_'
      },
      field: 'EXECUTION_ID_'
    },
    processInstanceId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RU_EXECUTION',
        key: 'ID_'
      },
      field: 'PROCESS_INSTANCE_ID_'
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
    retries: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'RETRIES_'
    },
    exceptionStackId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_GE_BYTEARRAY',
        key: 'ID_'
      },
      field: 'EXCEPTION_STACK_ID_'
    },
    exceptionMsg: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'EXCEPTION_MSG_'
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'DUEDATE_'
    },
    repeat: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'REPEAT_'
    },
    handlerType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'HANDLER_TYPE_'
    },
    handlerCfg: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'HANDLER_CFG_'
    },
    tenantId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'TENANT_ID_'
    }
  }, {
    tableName: 'ACT_RU_TIMER_JOB'
  });
};
