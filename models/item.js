const mongoose=require('mongoose')

const ItemSchema=mongoose.Schema({
    item_name:{required:true,type:String},
    desc:{required:true,type:String},
    category:{type:String,required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    quantity:{type:String,required:true},
    stock:{type:Number,required:true},
    Offerprice:{type:Number,default:0},
    price:{type:Number,required:true},
    veg:{type:Boolean,required:true}
},{timestamps:true})
module.exports=mongoose.model('Items',ItemSchema)