const express = require('express');
const router = express.Router();
const controller = require('../controllers/gamesController')
//var auth = require("./auth");

router.get('/',  controller.get);
router.get('/:id',  controller.show);
router.post('/',  controller.post);
router.delete("/:id", controller.delete);
router.put("/:id",  controller.put);

// outro arquivo
///router.post("/auth",controller.auth);

module.exports = router;
