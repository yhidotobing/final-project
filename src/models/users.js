"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Joins }) {
      // define association here
      Users.hasMany(Joins, { foreignKey: "user_id" });
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
      foto: DataTypes.TEXT,
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
      status: {
        type: DataTypes.ENUM("Admin", "User"),
        defaultValue: "User",
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
