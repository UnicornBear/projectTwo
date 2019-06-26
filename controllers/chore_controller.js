var db = require("../models");
// var log = require("loglevel").getLogger("chore_controller");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Chore.findAll({
      include: [db.users],
      order: "name ASC"
    })
      .then(function(data) {
        var hbsObject = {
          chores: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err });
      });
  });

  app.post("/chores", function(req, res) {
    db.Chore.create(req.body)
      .then(function() {
        res.redirect("/");
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err });
      });
  });

  app.put("/chores/:id", function(req, res) {
    var choreID = req.params.id;
    var userName = req.body.userName;

    db.Users.findAll({
      where: {
        name: userName
      }
    })
      .then(function(user) {
        if (user.length === 0) {
          // Create new customer
          db.Users.create({
            name: userName
          })
            .then(function(newUser) {
              db.Chores.update(
                {
                  chore_completed: true,
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
          db.Chore.update(
            {
              chore_completed: true,
              UserId: user[0].id
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
        }
      })
      .catch(function(error) {
        if (error) {
          res.json({ status: "ERROR", message: error });
        }
      });
  });
};
