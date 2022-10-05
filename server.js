const express = require("express");
const cors = require("cors");
const app = express();
const knex = require("knex");
const bcrypt = require("bcrypt-nodejs");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// db.select("*")
//   .from("users")
//   .then((data) => {
//     console.log(data);
//   });

app.use(cors());
app.use(express.json()); // bodyParser.json()

app.get("/", (req, res) => {
  res.send("users");
});

app.post("/signin", signin.handleSignin(db, bcrypt));

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageUrl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening at port ${process.env.PORT}...`)
);

// / --> res = this is working
// /signin --> POST = success/fail
// /register --> POST = user
// /profile/:userId --> GET = user
// /image --> PUT --> user
