const router = require('express').Router();
const db = require('../services/db');

function checkLoginUser(req,res){
    if(req.session.userKey != keys.userKey){
        res.render('../auth/logout');
    }
    return;
}


router.get('/',(req,res) => {
    checkLoginUser(req,res);
    res.render('studentHome.ejs');
})

router.put('/holdBook',(req,res) => {
    checkLoginUser(req,res);
})

router.get('/searchBook',(req,res) => {
    checkLoginUser(req,res);
    var criterion = req.query.criterion;
    var keyword = req.query.keyword;
})

router.put('/changePassword',(req,res) => {
    checkLoginUser(req,res);

    let old_password = req.body.old_password;
    let new_password = req.body.new_password;

    let query = 'SELECT password FROM user WHERE user_id = '+req.session.user_id;

    let old_password_db;

    db.query(query,(err,result) => {
        checkError(err,res);
        old_password_db = result[0].password;
    });
    bcrypt.compare(old_password,old_password_db).
    then((same_old) => {
        if(!same_old){
            res.render('userHome.ejs')
        }
        else{
            let encryptedPassword;
            query = 'UPDATE user SET ?';
    
            bcrypt.hash(new_password,keys.saltRounds)
            .then((password) => {
                encryptedPassword = password;
                let post = {
                    password : encryptedPassword
                }
        
               // console.log(new_password);
        
                db.query(query,post,(err,result) => {
                    checkError(err,res);
                    res.render('userHome.ejs');
                })
            })
            .catch((error) => {
                res.render('error.ejs');
            })
        }
    })
    .catch((error) => {
        res.render('error.ejs');
    })
    
})

module.exports = router;