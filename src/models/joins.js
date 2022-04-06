"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Joins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Joins, Classes }) {
      // define association here
      Joins.belongsTo(Users);
      Joins.belongsTo(Classes);
    }
  }
  Joins.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: DataTypes.INTEGER,
      class_id: DataTypes.STRING,
      role: DataTypes.ENUM("student", "tutor", "facilitator"),
    },
    {
      sequelize,
      modelName: "Joins",
    }
  );
  return Joins;
};
