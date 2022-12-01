var express = require('express');
var router = express.Router();
const userauth=(req,res,next)=>{
    if(req.session.orderId){
        next();
    }else{
        res.redirect('/')
    }
}
const userController=require('../controller/userController')
const checkoutController=require('../controller/checkoutController')

/* GET users listing. */
router.get('/',userController.getMenu);
router.post('/checkout',checkoutController.postCheckout)
router.get('/payment',userauth,checkoutController.getPayment)
router.post('/address',userauth,checkoutController.postAddress)
module.exports = router;
