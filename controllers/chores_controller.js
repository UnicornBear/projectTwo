var db = require("../models");
var log = require("loglevel").getLogger("chores_controller");
0
module.exports = function(app) {

  app.get("/", function(req, res) {
    log.debug("___ENTER GET /___");

    db.Chore.findAll({
      include: [ db.User ],
      order: "name ASC"
    })
    .then(function(data) {
      log.debug("data = " + JSON.stringify(data));
      res.render("index", {chores: data});
    })
    .catch(function(err) {
      log.error("ERR = " + err);
      res.json({status: "ERROR", message: err});
    });
  });


  // Load popup page and pass in an example by id
  app.get("/popup/:id", function(req, res) {
      db.Chore.findOne({ 
        where: { id: req.params.id }
      })
      .then(function(data) {
        log.debug("data = " + JSON.stringify(data));
        res.render("popup", { popup: data});
      })
      .catch(function(err) {
        log.error("ERR = " + err);
        res.json({status: "ERROR", message: err});
      });
    });


  app.post("/chores", function(req, res) {
    log.debug("___ENTER POST /chores__"); 

    db.Chore.create(req.body)
    .then(function(chore) {
      res.redirect("/");
    })
    .catch(function(err) {
      log.error("ERR = " + err);
      res.json({status: "ERROR", message: err});
    });
  });


  // destory the chore
  app.delete("/delete/:id", function(req, res){
    db.Chore.destroy({
      where:{
        id: [req.params.id]
      }
    })
    res.redirect('/');
  });




  app.put("/chores/:id", function(req, res) {
    log.debug("___ENTER PUT /chores:id___");

    log.debug("id = " + req.params.id);
    log.debug("customer = " + JSON.stringify(req.body.userName));

    var choreID = req.params.id;
    var userName = req.body.userName; 
    // var check = req.user.points;

    db.User.findAll({
      where: {
        name: userName
      }
    })
    .then(function(user) {
      if (user.length === 0) {
        log.debug("customer does not exist!");

        // Create new customer
        db.User.create({
          name: userName
        })
        .then(function(newUser) {
          log.debug("customer created = " + JSON.stringify(newUser));

          db.Chore.update(
            {
              completed: true,
              UserId: newUser.id,
              pointTotal:  15
            },
            {
              where: {
                id: req.params.id
              }
            }
          ).then(function(chore) {
            res.redirect('/');
          })
          .catch(function (err) {
            log.error("ERR = " + err);
            res.json({status: "ERROR", message: err});
          });
        })
        .catch(function(error) {
          log.debug("ERROR: Error on customer create -- " + JSON.stringify(error));
          res.json({status: "ERROR", message: error});
        })
      } else { 
        log.debug("customer exists = " + JSON.stringify(user));


        db.Chore.update(
          {
            completed: true,
            UserId: user[0].id,
            pointTotal:  15
          },
          {
            where: {
              id: req.params.id
            }
          }
        ).then(function(chore) {
          res.redirect('/');
        })
        .catch(function (err) {
          log.error("ERR = " + err);
          res.json({status: "ERROR", message: err});
        });
      } 
    })
    .catch(function(error) {
      if(error) {
        log.debug("ERROR: Error on customer query -- " + JSON.stringify(error));
        res.json({status: "ERROR", message: error});
      }
    });
  });

};