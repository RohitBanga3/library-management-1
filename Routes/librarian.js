const router = require('express').Router();
const db = require('../services/db');
const bcrypt = require('bcrypt');
const keys = require('../config/keys');

function checkLoginLibrarian(req,res){
    if(req.session.librarianKey != keys.librariankey){
        res.redirect('../auth/logout');
    }
}

function checkError(error,res){
    if(error){
        console.log({success:false,message:'database error',err:error});
        res.send({success:false,message:'database error',err:error});
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

    var query = 'INSERT INTO `book` SET ?'

    var post = {
        book_id : req.body.book_id,
        ISBN : req.body.ISBN,
        title : req.body.title,
        copy_number : req.body.copy_number,
        shelf_id : req.body.shelf_id,
        row_number : req.body.row_number,
        author_id : req.body.author_id
    }

    db.query(query,post,(err,result) => {
        checkError(err,res);
        res.redirect('/librarian/');
    });
})

router.delete('/deleteBook',(req,res) => {
    checkLoginLibrarian(req,res);

    var query = 'DELETE FROM `book WHERE `book_id` = '+ req.body.book_id;
    db.query(query,(err,result,fileds) => {
        checkError(err,res);
        res.redirect('/librarian/');
    });
})

router.put('/issueBook',(req,res) => {
    checkLoginLibrarian(req,res);

    var query = 'SELECT SUM(`fine_amount`) AS total_fine FROM `fines` WHERE `user_id` = '+req.body.user_id+' GROUP BY user_id';
    var fine_amount;
    db.query(query,(err,result) =>{
        checkError(err,res);
        if(result.length != 0){
            fine_amount = result[0].total_fine;
        }
        else{
            fine_amount = 0;
        }
    })

    if(fine_amount > 20){
        res.redirect('/librarian/')
    }
    
    query = 'SELECT status FROM book WHERE book_id = '+req.body.book_id;

    db.query(query,(err,result) => {
        checkError(err,res);
        if(result[0].status == 'on loan'){
            res.redirect('/librarian/');
        }
    });

    query = 'SELECT user.user_id FROM (book INNER JOIN user ON user.user_id = book.borrowed_id) WHERE user.user_id = '+req.body.user_id +' AND DATEDIFF(borrowed_date,CURRENT_DATE()) > 10';



    db.query(query,(err,result) => {
        checkError(err,res);
        console.log(result);
        res.redirect('/librarian')
    })

    query = 'UPDATE `book` SET ? WHERE book_id = '+req.body.book_id;

    /*var post = {
        borrowed_date:new Date(),
        borrowed_id:req.body.user_id,
        status: "on loan"
    }

    db.query(query,post,(err,result,fields) => {
        checkError(err,res);
        res.redirect('/librarian');
    });*/
})

router.put('/returnBook',(req,res) => {
    checkLoginLibrarian(req,res);

    var query = 'UPDATE book'

});

router.put('/clearfine',(req,res) => {
    checkLoginLibrarian(req,res);
})

router.post('/addUser',(req,res) => {
    checkLoginLibrarian(req,res);
})

router.put('/changePassword',(req,res) => {
    checkLoginLibrarian(req,res);
})

module.exports = router;