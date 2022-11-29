var express = require('express');
var router = express.Router();

const userController=require('../controller/userController')

/* GET users listing. */
router.get('/',userController.getMenu);

module.exports = router;
