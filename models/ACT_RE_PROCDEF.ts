/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actReProcdefInstance, actReProcdefAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actReProcdefInstance, actReProcdefAttribute>('actReProcdef', {
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
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CATEGORY_'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME_'
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'KEY_'
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'VERSION_'
    },
    deploymentId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'DEPLOYMENT_ID_'
    },
    resourceName: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'RESOURCE_NAME_'
    },
    dgrmResourceName: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'DGRM_RESOURCE_NAME_'
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'DESCRIPTION_'
    },
    hasStartFormKey: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'HAS_START_FORM_KEY_'
    },
    hasGraphicalNotation: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'HAS_GRAPHICAL_NOTATION_'
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
    engineVersion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ENGINE_VERSION_'
    }
  }, {
    tableName: 'ACT_RE_PROCDEF'
  });
};
