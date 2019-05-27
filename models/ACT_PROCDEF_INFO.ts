/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {actProcdefInfoInstance, actProcdefInfoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<actProcdefInfoInstance, actProcdefInfoAttribute>('actProcdefInfo', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'ID_'
    },
    procDefId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'ACT_RE_PROCDEF',
        key: 'ID_'
      },
      unique: true,
      field: 'PROC_DEF_ID_'
    },
    rev: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'REV_'
    },
    infoJsonId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'ACT_GE_BYTEARRAY',
        key: 'ID_'
      },
      field: 'INFO_JSON_ID_'
    }
  }, {
    tableName: 'ACT_PROCDEF_INFO'
  });
};
