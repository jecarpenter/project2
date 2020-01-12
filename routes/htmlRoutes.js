var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/devregister", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/devregister.html"));
  });

  app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // SAMPLE TEXT STARTS HERE

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
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
