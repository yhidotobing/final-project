"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sessions, Classes, Materials }) {
      // define association here
      Sessions.belongsTo(Classes, { foreignKey: "class_id" });
      Sessions.hasMany(Materials, { foreignKey: "session_id" });
    }
  }
  Sessions.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      kode_sesi: {
        type: DataTypes.STRING(6),
        validate: {
          len: [6, 6],
        },
        unique: true,
      },
      nama_sesi: { type: DataTypes.STRING, allowNull: false },
      waktu_mulai: { type: DataTypes.TIME, allowNull: false },
      waktu_selesai: { type: DataTypes.TIME, allowNull: false },
      urutan_sesi: DataTypes.TINYINT,
      class_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Sessions",
    }
  );
  return Sessions;
};
