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
      Classes.hasMany(Sessions, { foreignKey: "class_id" });
      Classes.hasMany(Joins, { foreignKey: "class_id" });
    }
  }
  Classes.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      kode_kelas: {
        type: DataTypes.STRING(6),
        autoIncrement: false,
        validate: {
          len: [6, 6],
        },
        unique: true,
      },
      nama_kelas: { type: DataTypes.STRING, unique: true, allowNull: false },
      tanggal_mulai: DataTypes.DATEONLY,
      tanggal_selesai: DataTypes.DATEONLY,
      deskripsi_kelas: DataTypes.STRING,
      foto_kelas: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
