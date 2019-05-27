/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuEventSubscrInstance, actRuEventSubscrAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuEventSubscrInstance, actRuEventSubscrAttribute>('actRuEventSubscr', {
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
    eventType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'EVENT_TYPE_'
    },
    eventName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'EVENT_NAME_'
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
    procInstId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'PROC_INST_ID_'
    },
    activityId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'ACTIVITY_ID_'
    },
    configuration: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CONFIGURATION_'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP(3)',
      field: 'CREATED_'
    },
    procDefId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'PROC_DEF_ID_'
    },
    tenantId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'TENANT_ID_'
    }
  }, {
    tableName: 'ACT_RU_EVENT_SUBSCR'
  });
};
