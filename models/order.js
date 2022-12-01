const mongoose=require('mongoose')

const OrderSchema=mongoose.Schema({
    orderDetails:{type:Array},
    total:{type:Number},
    address:{type:Array}
})
module.exports=mongoose.model('Order',OrderSchema)