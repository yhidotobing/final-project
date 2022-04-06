"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Class.init(
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
      modelName: "Class",
    }
  );
  return Class;
};
