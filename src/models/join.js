"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Join extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Join.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: DataTypes.INTEGER,
      class_id: DataTypes.STRING,
      role: DataTypes.ENUM("student", "tutor", "facilitator"),
    },
    {
      sequelize,
      modelName: "Join",
    }
  );
  return Join;
};
