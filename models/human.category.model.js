module.exports = (sequelize, DataTypes) => {
    const HumanCategory = sequelize.define("HumanCategory", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        finish_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM("male", "female", "other"),
            allowNull: false,
        }
    });

    HumanCategory.associate = (models) => {
        HumanCategory.hasMany(models.Event, {
            foreignKey: "human_category_id",
            as: "HumanCategoryType",
        });

    }

    return HumanCategory;
};