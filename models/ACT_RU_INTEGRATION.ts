/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actRuIntegrationInstance, actRuIntegrationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actRuIntegrationInstance, actRuIntegrationAttribute>('actRuIntegration', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'ID_'
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
    flowNodeId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'FLOW_NODE_ID_'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP(3)',
      field: 'CREATED_DATE_'
    }
  }, {
    tableName: 'ACT_RU_INTEGRATION'
  });
};
