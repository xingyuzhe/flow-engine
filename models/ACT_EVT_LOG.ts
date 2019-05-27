/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actEvtLogInstance, actEvtLogAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actEvtLogInstance, actEvtLogAttribute>('actEvtLog', {
    logNr: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'LOG_NR_'
    },
    type: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'TYPE_'
    },
    procDefId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'PROC_DEF_ID_'
    },
    procInstId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'PROC_INST_ID_'
    },
    executionId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'EXECUTION_ID_'
    },
    taskId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'TASK_ID_'
    },
    timeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP(3)',
      field: 'TIME_STAMP_'
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'USER_ID_'
    },
    data: {
      type: "LONGBLOB",
      allowNull: true,
      field: 'DATA_'
    },
    lockOwner: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'LOCK_OWNER_'
    },
    lockTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LOCK_TIME_'
    },
    isProcessed: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
      field: 'IS_PROCESSED_'
    }
  }, {
    tableName: 'ACT_EVT_LOG'
  });
};
