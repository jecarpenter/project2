require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var db = require("./models");

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = "secretkey23456";

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


//login logic begins here:

//setting up body parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', (req, res) => {
  res.status(200).send({ access_token: '' });
});

router.post('/login', (req, res) => {
  res.status(200).send({ access_token: '' });
});

//setting the homepage and displaying text to test connection
router.get('/', (req, res) => {
  res.status(200).send('This is an authentication server');
});

//Here is the post method for sending new user data to the database
router.post('/register', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password);

  createUser([name, email, password], (err) => {
    if (err) return res.status(500).send("Server error!");
    findUserByEmail(email, (err, user) => {
      if (err) return res.status(500).send('Server error!');
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
        expiresIn: expiresIn
      });
      res.status(200).send({
        "user": user, "access_token": accessToken, "expires_in": expiresIn
      });
    });
  });
});

//setting up login post for database
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  findUserByEmail(email, (err, user) => {
    if (err) return res.status(500).send('Server error!');
    if (!user) return res.status(404).send('User not found!');
    const result = bcrypt.compareSync(password, user.password);
    if (!result) return res.status(401).send('Password not valid!');

    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn
    });
    res.status(200).send({ "user": user, "access_token": accessToken, "expires_in": expiresIn });
  });
});


module.exports = app;
