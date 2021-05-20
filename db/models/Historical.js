const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Historical extends Model {}

Historical.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    draw: {// a date
      type: DataTypes.STRING,
    },
    numbers: {// an array of numbers
      type: DataTypes.STRING,
    },
    mega: {// a number
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'historical',
  }
);

module.exports = Historical;
