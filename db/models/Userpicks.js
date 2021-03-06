const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Userpicks extends Model {}

Userpicks.init(
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
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userpicks',
  }
);

module.exports = Userpicks;
