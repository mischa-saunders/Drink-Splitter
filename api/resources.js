const express = require("express");
const route = express.Router();
var bcrypt = require('bcryptjs');

module.exports = function(db) {

  route.get("/users", getUsers);
  route.get("/nights", getNights);
  route.get("/users_nights", getUsersNights);
  route.post("/", post);
  route.post("/users", postNewUser);

  function getUsers(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
  }

  function getNights(req, res, next) {
    db.findAll('nights')
      .then((nights) => {
        res.json(nights)
      })
  }

  function getUsersNights(req, res, next) {
    db.findAll('users_nights')
      .then((users_nights) => {
        res.json(users_nights)
      })
  }

  function postNewUser(req, res, next){
    console.log(req.body, 'req.body here');
        db.addUser('users',req.body)
        .then((users)=>{
          res.json(users)
    })
  }

  function post(req, res, next) {}

  return route;
};
