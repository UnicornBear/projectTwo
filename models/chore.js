module.exports = function(sequelize, DataTypes) {

    var Chore = sequelize.define("Chore", 
      {
        chore_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        instructions: {
          type: DataTypes.STRING,
          allowNull: true
        },
        completed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        points: {
          type: DataTypes.STRING,
          defaultValue: 0
        }
      }, {
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
      });
  
    return Chore;
  };