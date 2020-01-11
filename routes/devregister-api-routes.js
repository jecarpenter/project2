var db = require("../models");

module.exports = function (app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/devregister", function (req, res) {
    db.profiles.findAll({}).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.get("/api/devregister/:id", function (req, res) {

    db.profiles.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.post("/api/devregister", function (req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.profiles.create(req.body).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.delete("/api/devregisters/:id", function (req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.profiles.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

};
