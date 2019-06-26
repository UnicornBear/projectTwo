module.exports = function(sequelize, DataTypes) {
  var Chore = sequelize.define(
    "Chore",
    {
      chore_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      chore_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Chore.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: true
            }
          });
        }
      }
    }
  );

  return Chore;
};
