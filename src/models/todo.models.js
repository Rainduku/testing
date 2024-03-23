const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const TodoModel = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, 
  {
    tableName: 'todo',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  },
);

module.exports = TodoModel;