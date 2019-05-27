/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuVariableInstance, actRuVariableAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuVariableInstance, actRuVariableAttribute>('actRuVariable', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'NAME_'
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
    taskId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'TASK_ID_'
    },
    bytearrayId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_GE_BYTEARRAY',
        key: 'ID_'
      },
      field: 'BYTEARRAY_ID_'
    },
    double: {
      type: "DOUBLE",
      allowNull: true,
      field: 'DOUBLE_'
    },
    long: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'LONG_'
    },
    text: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'TEXT_'
    },
    text2: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'TEXT2_'
    }
  }, {
    tableName: 'ACT_RU_VARIABLE'
  });
};
