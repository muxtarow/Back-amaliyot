const bcrypt = require("bcrypt");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Region.associate = (models) => {
        Region.hasMany(models.District, {
            foreignKey: "regionId",
            as: "district",
        });
        Region.hasMany(models.VenueModel, {
            foreignKey: "regionId",
            as: "region",
        });
    };
    return Region;
};