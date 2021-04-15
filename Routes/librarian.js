const router = require('express').Router();
const db = require('../services/db');
const bcrypt = require('bcrypt');
const keys = require('../config/keys');

function checkLoginLibrarian(req,res){
    if(req.session.librarianKey != keys.librariankey){
        res.redirect('../auth/logout');
    }
}



async function addUser(req,res){
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password,keys.saltRounds);

    var user = {
        "email":req.body.email,
        "password":encryptedPassword,
        "name":req.body.name,
        "user_id" :req.body.user_id,
        "phone_number":req.body.phone_number
    }
    var query = 'INSERT INTO user SET ?';
    db.query(query,user,(error,results,fields) => {
        if(error){
            res.send({
                "code":400,
                "failed":"error occured"
            })
        } else{
            res.send({
                "code":200,
                "success":"registration successfull"
            })
        }
    })
}

router.get('/',(req,res) => {
    checkLoginLibrarian(req,res);
    let librarian_id = req.session.librarian_id;
    res.render('librarianHome.ejs');
})

router.post('/addBook',(req,res) => {
    checkLoginLibrarian(req,res);
})

router.delete('/deleteBook',(req,res) => {
    checkLoginLibrarian(req,res);
})

router.put('/issueBook',(req,res) => {
    checkLoginLibrarian(req,res);
})

router.put('/returnBook',(req,res) => {
    checkLoginLibrarian(req,res);
});

router.put('/clearfine',(req,res) => {
    checkLoginLibrarian(req,res);
})

router.post('/addUser',(req,res) => {
    checkLoginLibrarian(req,res);
})


module.exports = router;