module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Country.associate = (models) => {
        Country.hasMany(models. CustomerAddress, {
            foreignKey: "country_id",
            as: "customerAddress"
        });
    };

    return Country;
};