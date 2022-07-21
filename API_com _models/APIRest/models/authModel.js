const express = require("express");
const DBGames = require("../database/Users");
const connection= require("../database/database");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");


const jwtsecret = "senhafoda"

exports.auth = async (req, res, next) => {

}