"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_lengkap: DataTypes.STRING,
      tempat_lahir: DataTypes.STRING,
      tanggal_lahir: DataTypes.DATE,
      foto: DataTypes.BLOB,
      tempat_tinggal: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        unique: true,
        msg: "Email sudah terdaftar!",
      },
      pendidikan_terakhir: DataTypes.STRING,
      institusi: DataTypes.STRING,
      pekerjaan: DataTypes.STRING,
      social_media: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
