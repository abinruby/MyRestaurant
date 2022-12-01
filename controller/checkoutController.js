const Order=require('../models/order')
const ObjectId=require('mongoose').Types.ObjectId
const Razorpay = require("razorpay");

exports.postCheckout=async(req,res)=>{
    const orderData=req.body
    const total=orderData.pop()
   const saveOrder=new Order({
    orderDetails:orderData,
    total:total.total
   })
   const order= await saveOrder.save()
   const orderId=order._id
   req.session.orderId=orderId
   res.redirect('/payment');
  
}

exports.getPayment=async(req,res)=>{
    
    const orderId=req.session.orderId
    console.log(orderId);
    const order=await Order.findOne({_id:orderId})
    console.log(order,'jlkjlkjjkljkjl');
    const total=order.total
    console.log(total,'qwertyuiopoiuytrewq');
   res.render('payment',{total,orderId})  

    }

exports.postAddress=async(req,res)=>{
    
    const saveAddress= await Order.updateOne({_id:ObjectId},
        {$set:{address:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            city:req.body.city,
            pincode:req.body.pincode,
            address:req.body.address,
            phone:req.body.phone
        }
            
        }}
        )
        res.redirect('/payment');
}    