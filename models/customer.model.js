module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        birth_date: {
            type: DataTypes.STRING,
        },
        gender_id: {
            type: DataTypes.INTEGER,
        },
        lang_id: {
            type: DataTypes.INTEGER,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
        }
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.CustomerAddress, {
            foreignKey: "customer_id",
            as: "customer_addresses",
        });

        Customer.hasMany(models.CustomerCard, {
            foreignKey: "customer_id",
            as: "Customer_cards",
        });
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "card",
        });
        Customer.belongsTo(models.Lang, {
            foreignKey: "lang_id",
            as: "lang",
        });
        Customer.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender",
        });
    };

    return Customer;
};