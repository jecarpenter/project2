var db = require("../models");

module.exports = function (app) {
  // Find all Profiles and return them to the user with res.json
  app.get("/api/search", function (req, res) {
    console.log(res.body)
    db.Profiles.findAll({}).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.get("/api/devregisters/:id", function (req, res) {

    db.Profiles.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.post("/api/devregisters", function (req, res) {
    // Create a profile with the data available to us in req.body
    console.log(req.body);
    db.Profiles.create(req.body).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.delete("/api/devregisters/:id", function (req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Profiles.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProfiles) {
      res.json(dbProfiles);
    });
  });

};

