const Category=require('../models/category')

exports.getCategory=async(req,res)=>{
   const categories=await Category.find({})
   res.render('admin-category',{categories})

}

exports.postCategory=async(req,res)=>{
    const categoryExists=await Category.findOne({category_name:{$regex:'.*'+req.body.category+'.*',$options:'i'}})
    console.log(categoryExists);
    if(categoryExists){
        req.session.message={
            type:'danger',
            message:'category already exists'
        }
        res.status(500).redirect('/admin/category')
    }else{
        const saveCategory=new Category({
            category_name:req.body.category
        })
         saveCategory.save((err)=>{
            if(err){
                res.json({message:err.message})
            }else{
                req.session.message={
                    type:'success',
                    message:'category added succesfully',
                }
                res.redirect('/admin/category')
            }
        })
    }
   
}

exports.deleteCategory=async(req,res)=>{
    await Category.findByIdAndDelete(req.params.id)
    res.redirect('/admin/category')
}