/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actReDeploymentInstance, actReDeploymentAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actReDeploymentInstance, actReDeploymentAttribute>('actReDeployment', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'ID_'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME_'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CATEGORY_'
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'KEY_'
    },
    tenantId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'TENANT_ID_'
    },
    deployTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'DEPLOY_TIME_'
    },
    engineVersion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ENGINE_VERSION_'
    }
  }, {
    tableName: 'ACT_RE_DEPLOYMENT'
  });
};
