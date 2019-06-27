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


  //
  app.post("/api/users/:id", function(req, res) {
    var userName = req.body.userName;

    db.User.findAll({
      where: {
        name: userName
      }
    })
      .then(function(user) {
        if (user.length === 0) {
          // Create new user
          db.User.create({
            name: userName
          })
            .then(function(newUser) {
              db.Chore.update(
                {
                  completed: true,
                  UserId: newUser.id
                },
                {
                  where: {
                    id: req.params.id
                  }
                }
              )
                .then(function() {
                  res.redirect("/");
                })
                .catch(function(err) {
                  res.json({ status: "ERROR", message: err });
                });
            })
            .catch(function(error) {
              res.json({ status: "ERROR", message: error });
            });
        } else {
          log.debug("customer exists = " + JSON.stringify(customer));

          db.Chore.update(
            {
              completed: true,
              UserID: user[0].id
            },
            {
              where: {
                id: req.params.id
              }
            }
          )
            .then(function() {
              res.redirect("/");
            })
            .catch(function(err) {
              log.error("ERR = " + err);
              res.json({ status: "ERROR", message: err });
            });
        }
      })
      .catch(function(error) {
        if (error) {
          res.json({ status: "ERROR", message: error });
        }
      });
  });
};
