module.exports = function(sequelize, DataTypes) {
  var Chore = sequelize.define("Chore", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    points: DataTypes.STRING
  });
  return Chore;
};
