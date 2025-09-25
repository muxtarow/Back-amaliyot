const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const VenueModel = sequelize.define("VenueModel", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        regionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        districtId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });

    VenueModel.associate = (models) => {
        VenueModel.belongsTo(models.Region, {
            foreignKey: "regionId",
            as: "region"
        });
        VenueModel.belongsTo(models.District, {
            foreignKey: "districtId",
            as: "district"
        });
        VenueModel.hasMany(models.VenueVenueType, {
            foreignKey: "venueId",
            as: "venue"
        })
        VenueModel.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seat_venue"
        });
    };



    return VenueModel;
};
