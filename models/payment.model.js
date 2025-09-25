module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
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

    Payment.associate = (models) => {
        Payment.hasMany(models.Booking, {
            foreignKey: "payment_method_id",
            as: "booking",
        });
    };
    return Payment;
};