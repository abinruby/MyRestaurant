var express = require('express');
var router = express.Router();
const categoryController=require('../controller/categoryController')
const menuController=require('../controller/menuController')
const adminController=require('../controller/adminController')

const adminauth = (req, res, next) => {
  if (req.session.adminlog) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};

/* GET home page. */
router.get('/',adminauth, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',adminController.loginpage);
router.post('/login',adminController.adminlogin)
router.get('/logout',adminController.adminlogout)

router.get('/category',adminauth,categoryController.getCategory);
router.post('/category',categoryController.postCategory)
router.get('/category/:id',adminauth,categoryController.deleteCategory)
router.get('/menu',adminauth,menuController.getallItems)
router.get('/add-item',adminauth,menuController.getAddMenu)
router.post('/add-item',menuController.postAddMenu)
router.get('/edit-item/:id',adminauth,menuController.getEditItems)
module.exports = router;
