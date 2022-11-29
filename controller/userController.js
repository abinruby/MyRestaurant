const Item=require('../models/item')
const Category=require('../models/category')
const ObjectId=require('mongoose').Types.ObjectId


exports.getMenu=async(req,res)=>{
    const categories=await Category.aggregate([
        {
           $lookup:
           {
            from: 'items',
            localField: '_id',
            foreignField: 'categoryId',
            as: 'result'
          }
        }
    ])
    res.render('user-menu',{categories})
}