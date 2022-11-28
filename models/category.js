const mongoose=require('mongoose')

const CategorySchema=new mongoose.Schema({
    category_name:{required:true,
    type:String,unique:true},
    offer:{type:Object}
})

module.exports=mongoose.model('Category',CategorySchema)