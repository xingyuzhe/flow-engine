/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actGePropertyInstance, actGePropertyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actGePropertyInstance, actGePropertyAttribute>('actGeProperty', {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'NAME_'
    },
    value: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'VALUE_'
    },
    rev: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'REV_'
    }
  }, {
    tableName: 'ACT_GE_PROPERTY'
  });
};
