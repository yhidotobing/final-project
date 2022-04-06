"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Classes, Sessions, Joins }) {
      // define association here
      Classes.hasMany(Sessions);
      Classes.hasMany(Joins);
    }
  }
  Classes.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nama_kelas: DataTypes.STRING,
      tanggal_mulai: DataTypes.DATEONLY,
      tanggal_selesai: DataTypes.DATEONLY,
      deskripsi_kelas: DataTypes.STRING,
      foto_kelas: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
