const db = require('../services/db');
const bcrypt = require('bcrypt');
var router = require('express').Router();
const keys = require('../config/keys');

function checkLoginLibrarian(req,res){
    if(req.session.librariankey == keys.librariankey){
        res.redirect('../librarian/');
    }
}

function checkLoginUser(req,res){
    if(req.session.userKey == keys.userKey){
        res.render('../user/');
    }
    return;
}

userLogin = async function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    var query = 'SELECT * FROM user WHERE email = ?';

    db.query(query,[email], async function(error,results,fields) {
        if(error){
            console.log(error);
            res.render('error.ejs',{
                message:'database error',
                error:error
            })
        }else{
            if(results.length > 0){
                const comparision = await bcrypt.compare(password,results[0].password)
                console.log(comparision,password,results[0].password);
                if(comparision){
                    req.session.userKey = keys.userKey;
                    req.session.user_id = results[0].user_id;
                    res.render('userHome.ejs');
                }
                else{
                    res.render('loginUser.ejs',{
                        error:"check email or password"
                    })
                }

            }
            else{
                res.render('loginUser.ejs',{
                    error:"check your email"
                })
            }
        }
    })
}

librarianLogin = async function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    var query = 'SELECT * FROM librarian WHERE email = ?';

    db.query(query,[email], async function(error,results,fields) {
        if(error){
            //console.log(error);

            res.render('error.ejs',{
                message:'database error',
                error:error
            })
        }else{
            if(results.length > 0){
                const comparision = await bcrypt.compare(password,results[0].password)
                
                if(comparision){
                    req.session.librarianKey = keys.librariankey;
                    req.session.librarian_id = results[0].librarian_id;
                    res.redirect('/librarian');
                }
                else{
                    res.render('loginlibrarian.ejs',{
                        error:"check email or password"
                    })
                }

            }
            else{
                res.render('loginlibrarian.ejs',{
                    error:"check your email"
                })
            }
        }
    })
}

router.get('/userlogin',(req,res) => {
    checkLoginUser(req,res);
    res.render('loginUser.ejs');
})

router.get('/librarianlogin',(req,res) => {
    checkLoginLibrarian(req,res);
    res.render('loginlibrarian.ejs');
})

router.post('/userlogin',(req,res) => {
    userLogin(req,res);
})

router.post('/librarianlogin',(req,res) =>{
    librarianLogin(req,res);
})

router.get('/logout',(req,res)=> {
    req.session = null;
    res.render('home.ejs');
})

module.exports = router;