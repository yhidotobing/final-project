"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materials.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      materi: DataTypes.STRING,
      file: DataTypes.TEXT,
      jenis_materi: DataTypes.ENUM("recording", "materi"),
    },
    {
      sequelize,
      modelName: "Materials",
    }
  );
  return Materials;
};
