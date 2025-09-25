module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false, 
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finish_date: {
            type: DataTypes.DATE,
        },
        finish_time: {
            type: DataTypes.DATE,
        },
        info: {
            type: DataTypes.STRING,
        },
        event_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        human_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATE,
        }
    }, {
        tableName: "event",
        timestamps: false
    });

    Event.associate = (models) => {
        Event.belongsTo(models.EventType, {
            foreignKey: "event_type_id",
            as: "eventType",
        });
        Event.belongsTo(models.HumanCategory, {
            foreignKey: "human_category_id",
            as: "humanCategory",
        });
        Event.belongsTo(models.VenueModel, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Event.belongsTo(models.Lang, {
            foreignKey: "lang_id",
            as: "language",
        });
        Event.hasMany(models.Ticket, {
            foreignKey: "event_id",
            as: "event",
        });
    };

    return Event;
};