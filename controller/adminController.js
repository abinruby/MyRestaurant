const Admin=require('../models/admin')


exports.loginpage=(req,res)=>{
    res.render('admin-login')
}

exports.adminlogin=async(req,res)=>{
    if (req.session.adminlog) {
        res.redirect("/admin");
      } else {
        const adminvalid = await Admin.findOne({
          $and: [{ email: req.body.email }, { password: req.body.password }],
        });
        if (adminvalid) {
          req.session.adminlog = true;
          res.status(200).redirect("/admin");
        } else {
          req.session.message = {
            type: "danger",
            message: "invalid credentials",
          };
          req.session.adminlog = false;
          res.redirect("/admin/login");
        }
      }
}

  /* ------------------------------- adminlogout ------------------------------ */

  exports.adminlogout = (req, res) => {
    try{
      req.session.adminlog = false;
      res.redirect("/admin/login");
    }catch(err){
      console.log(err,'admin logout');
      res.redirect('/404')
    }
  
  };