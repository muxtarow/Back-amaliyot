module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country_id: {
            type: DataTypes.INTEGER,
        },
        region_id: {
            type: DataTypes.INTEGER,
        },
        district_id: {
            type: DataTypes.INTEGER,
        },
        street: {
            type: DataTypes.STRING,
        },
        home: {
            type: DataTypes.STRING,
        },
        flat_id: {
            type: DataTypes.INTEGER,
        },
        landmark: {
            type: DataTypes.STRING,
        },
        postal_index: {
            type: DataTypes.STRING,
        },
        info: {
            type: DataTypes.TEXT,
        }
    });

    CustomerAddress.associate = (models) => {
        CustomerAddress.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });

        CustomerAddress.belongsTo(models.Country, {
            foreignKey: "country_id",
            as: "customerAddress"
        });

        CustomerAddress.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region"
        });

        CustomerAddress.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district"
        });
        CustomerAddress.belongsTo(models.Flat, {
            foreignKey: "flat_id",
            as: "flat"
        });
    };

    return CustomerAddress;
};