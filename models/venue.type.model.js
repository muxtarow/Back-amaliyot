const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const VenueType = sequelize.define("VenueType", {
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


    VenueType.associate = (models) => {
        VenueType.hasMany(models.VenueVenueType, {
            foreignKey: "venueTypeId",
            as: "venue_venueType"
        });
    }
    return VenueType;
};
