/** @format */

var express = require("express");

var router = express.Router();
var passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const db = require("../db");

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/login/federated/google", passport.authenticate("google"));
module.exports = router;
