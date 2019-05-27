/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actGeBytearrayInstance, actGeBytearrayAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actGeBytearrayInstance, actGeBytearrayAttribute>('actGeBytearray', {
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
    deploymentId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_RE_DEPLOYMENT',
        key: 'ID_'
      },
      field: 'DEPLOYMENT_ID_'
    },
    bytes: {
      type: "LONGBLOB",
      allowNull: true,
      field: 'BYTES_'
    },
    generated: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'GENERATED_'
    }
  }, {
    tableName: 'ACT_GE_BYTEARRAY'
  });
};
