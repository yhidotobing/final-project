"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Materials, Sessions }) {
      // define association here
      Materials.belongsTo(Sessions, { foreignKey: "session_id" });
    }
  }
  Materials.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      materi: { type: DataTypes.STRING, allowNull: false },
      file: DataTypes.TEXT,
      jenis_materi: DataTypes.ENUM("recording", "materi"),
      session_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Materials",
    }
  );
  return Materials;
};
