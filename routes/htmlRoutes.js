var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Chore.findAll({}).then(function(dbChores) {
      res.render("index", {
        msg: "Welcome Family!  -  You Ready to earn some points??",
        chores: dbChores
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/chore/:id", function(req, res) {
    db.Chore.findOne({ where: { id: req.params.id } }).then(function(dbChore) {
      res.render("chore", {
        chore: dbChore
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
