const bcrypt = require("bcrypt");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Lang = sequelize.define("Lang", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Lang.associate = (models) => {
        Lang.hasMany(models.Customer, {
            foreignKey: "lang_id",
            as: "lang"
        });
        Lang.hasMany(models.Event, {
            foreignKey: "lang_id",
            as: "language"
        });
    };
    return Lang;
};


