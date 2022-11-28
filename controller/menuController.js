const Item=require('../models/item')
const Category=require('../models/category')
const ObjectId=require('mongoose').Types.ObjectId


exports.getAddMenu=async(req,res)=>{
    const category=await Category.find({})
    res.render('admin-add-menu',{category})
}

exports.postAddMenu=async(req,res)=>{
    const productcategory=await Category.findOne({_id: ObjectId(req.body.categoryid)})
    const categoryname= productcategory.category_name
    const saveItem=new Item({
        item_name:req.body.item_name,
        desc:req.body.desc,
        category:categoryname,
        categoryId:req.body.categoryid,
        quantity:req.body.quantity,
        price:req.body.price,
        stock:req.body.stock
    })
    await saveItem.save()
    res.redirect('/menu')
}

exports.getallItems=async(req,res)=>{
    const limit =5
    let page=1
    if(req.query.page){
        page=req.query.page
    }
    let search=''
    if(req.query.search){
        search=req.query.search
    }
    const itemdetails=await Item.find({item_name:{$regex:'.*'+search+'.*',$options:'i'}}).limit(limit).skip((page-1)*limit).exec()
    const count=await Item.find().countDocuments()
    res.render('admin-menu',{itemdetails,totalPages:Math.ceil(count/limit),previous:page-1})
}
exports.getEditItems=async(req,res)=>{
    const category=await Category.find({})
    const itemdetails=await Item.findById(req.params.id)
    res.render('admin-edit-products',{itemdetails,category})
}