/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuTaskInstance, actRuTaskAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuTaskInstance, actRuTaskAttribute>('actRuTask', {
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
      references: {
        model: 'ACT_RU_EXECUTION',
        key: 'ID_'
      },
      field: 'PROC_INST_ID_'
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME_'
    },
    parentTaskId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'PARENT_TASK_ID_'
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'DESCRIPTION_'
    },
    taskDefKey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TASK_DEF_KEY_'
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'OWNER_'
    },
    assignee: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ASSIGNEE_'
    },
    delegation: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'DELEGATION_'
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'PRIORITY_'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CREATE_TIME_'
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'DUE_DATE_'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CATEGORY_'
    },
    suspensionState: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'SUSPENSION_STATE_'
    },
    tenantId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'TENANT_ID_'
    },
    formKey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'FORM_KEY_'
    },
    claimTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CLAIM_TIME_'
    }
  }, {
    tableName: 'ACT_RU_TASK'
  });
};
