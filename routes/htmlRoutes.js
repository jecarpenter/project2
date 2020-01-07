var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    res.render("register", {
      msg: "Welcome!",

    });

  });
  app.get("/login", function (req, res) {

    res.render("login", {
      msg: "Welcome!",

    });

  });

  // Load example page and pass in an example by id
  app.get("/project2/:id", function (req, res) {
    db.project2.findOne({ where: { id: req.params.id } }).then(function (dbProject2) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
