var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/chores", function(req, res) {
    db.Chore.findAll({}).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // Create a new example
  app.post("/api/chores", function(req, res) { 
    db.Chore.create(req.body).then(function(dbChore) {
      res.json(dbChore);
    });
  });

  // Delete an example by id
  app.delete("/api/chores/:id", function(req, res) {
    db.Chore.destroy({ where: { id: req.params.id } }).then(function(dbChore) {
      res.json(dbChore);
    });
  });
};
