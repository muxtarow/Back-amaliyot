module.exports = (sequelize, DataTypes) => {
    const CustomerCard = sequelize.define("CustomerCard", {
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
        phone: {
            type: DataTypes.STRING,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    });

    CustomerCard.associate = (models) => {
        CustomerCard.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
            onDelete: "CASCADE"
        });
    };

    return CustomerCard;
};