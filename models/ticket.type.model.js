module.exports = (sequelize, DataTypes) => {
    const TicketType = sequelize.define("TicketType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    TicketType.associate = (models) => {
        TicketType.hasMany(models.Ticket, {
            foreignKey: "ticket_type",
            as: "ticketType",
        });
    }

    return TicketType;
};