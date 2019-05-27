/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuIdentitylinkInstance, actRuIdentitylinkAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuIdentitylinkInstance, actRuIdentitylinkAttribute>('actRuIdentitylink', {
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
    groupId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'GROUP_ID_'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TYPE_'
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'USER_ID_'
    },
    taskId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RU_TASK',
        key: 'ID_'
      },
      field: 'TASK_ID_'
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
    }
  }, {
    tableName: 'ACT_RU_IDENTITYLINK'
  });
};
