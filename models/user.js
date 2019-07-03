module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", 
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }, 
        pointsTotal: {
          type: DataTypes.STRING,
          defaultValue: 0
        }
      }, {
        classMethods: {
          associate: function(models) {
            User.hasMany(models.Chore)
          }
        }
      });
  
    return User;
  };