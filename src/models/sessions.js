"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sessions.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nama_sesi: DataTypes.STRING,
      waktu_mulai: DataTypes.TIME,
      waktu_selesai: DataTypes.TIME,
      urutan_sesi: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: "Sessions",
    }
  );
  return Sessions;
};
