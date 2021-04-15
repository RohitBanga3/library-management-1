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
        res.render('../libararian/');
    }
    return;
}

studentLogin = async function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    var query = 'SELECT * FROM user WHERE email = ?';

    db.query(query,[email], async function(error,results,fields) {
        if(error){
            res.send({
                "code":400,
                "failed":"error occured"
            })
        }else{
            if(results.length > 0){
                const comparision = await bcrypt.compare(password,results[0].password)
                if(comparision){
                    req.session.cookieKey = keys.userKey;
                    req.session.user_id = user_id;
                    res.redirect('../studenthome')
                }
                else{
                    res.send({
                        "code":204,
                        "success":"email and password not match"
                    })
                }

            }
            else{
                res.send({
                    "code":206,
                    "success":"email doesn't exist"
                });
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
            res.send({
                "code":400,
                "failed":"error occured"
            })
        }else{
            if(results.length > 0){
                const comparision = await bcrypt.compare(password,results[0].password)
                if(comparision){
                    req.session.cookieKey = keys.librariankey;
                    req.session.librarian_id = results.librarian_id;
                    res.redirect('../librarianhome');
                }
                else{
                    res.send({
                        "code":204,
                        "success":"email and password not match"
                    })
                }

            }
            else{
                res.send({
                    "code":206,
                    "success":"email doesn't exist"
                });
            }
        }
    })
}

router.get('/studentlogin',(req,res) => {
    checkLogin(req,res);
    studentLogin(req,res);
})

router.get('/librarianlogin',(req,res) =>{
    checkLoginLibrarian(req,res);
    librarianLogin(req,res);
})

modules.exports = router;