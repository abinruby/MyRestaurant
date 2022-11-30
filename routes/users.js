var express = require('express');
var router = express.Router();

const userController=require('../controller/userController')
const checkoutController=require('../controller/checkoutController')

/* GET users listing. */
router.get('/',userController.getMenu);
router.get('/checkout',checkoutController.getCheckout)
module.exports = router;
