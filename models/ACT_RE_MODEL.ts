/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actReModelInstance, actReModelAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actReModelInstance, actReModelAttribute>('actReModel', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME_'
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'KEY_'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CATEGORY_'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CREATE_TIME_'
    },
    lastUpdateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'LAST_UPDATE_TIME_'
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'VERSION_'
    },
    metaInfo: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'META_INFO_'
    },
    deploymentId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RE_DEPLOYMENT',
        key: 'ID_'
      },
      field: 'DEPLOYMENT_ID_'
    },
    editorSourceValueId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_GE_BYTEARRAY',
        key: 'ID_'
      },
      field: 'EDITOR_SOURCE_VALUE_ID_'
    },
    editorSourceExtraValueId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_GE_BYTEARRAY',
        key: 'ID_'
      },
      field: 'EDITOR_SOURCE_EXTRA_VALUE_ID_'
    },
    tenantId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'TENANT_ID_'
    }
  }, {
    tableName: 'ACT_RE_MODEL'
  });
};
