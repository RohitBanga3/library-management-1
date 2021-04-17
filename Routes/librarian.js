const router = require('express').Router();
const db = require('../services/db');
const bcrypt = require('bcrypt');
const keys = require('../config/keys');
const { post } = require('./auth');

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

    let address = req.body.address ? req.body.address != undefined : null;

    let phone_number = req.body.phone_number ? req.body.phone_number!=undefined : null;

    var user = {
        "email":req.body.email,
        "password":encryptedPassword,
        "name":req.body.name,
        "user_id" :req.body.user_id,
        "phone_number":phone_number,
        "address":address,
        student:req.body.student
    }
    var query = 'INSERT INTO user SET ?';
    db.query(query,user,(err,results,fields) => {
        checkError(err,res);
        res.render('librarianHome.ejs')
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

    var query = 'DELETE FROM `book` WHERE `book_id` = '+ req.body.book_id;
    db.query(query,(err,result,fileds) => {
        checkError(err,res);
        res.render('librarianHome.ejs');
    });
})

router.put('/issueBook',(req,res) => {
    checkLoginLibrarian(req,res);

    let query = 'SELECT SUM(`fine_amount`) AS total_fine FROM `fine` WHERE `user_id` = '+req.body.user_id+' GROUP BY user_id';
    let fine_amount,status,overdue;
    db.query(query,(err,result) =>{
        checkError(err,res);
        if(result.length != 0){
            fine_amount = result[0].total_fine;
        }
        else{
            fine_amount = 0;
        }
    })
    
    query = 'SELECT status FROM book WHERE book_id = '+req.body.book_id;

    db.query(query,(err,result) => {
        checkError(err,res);
        status = result[0].status;
    });

    query = 'SELECT user.user_id FROM (book INNER JOIN user ON user.user_id = book.borrowed_id) WHERE user.user_id = '+req.body.user_id +' AND DATEDIFF(borrowed_date,CURRENT_DATE()) > 10';



    db.query(query,(err,result) => {
        checkError(err,res);
        overdue = result.length > 0;
    })

    query = 'UPDATE `book` SET ? WHERE book_id = '+req.body.book_id;

    var post = {
        borrowed_date:new Date(),
        borrowed_id:req.body.user_id,
        status: "on loan"
    }

    if(fine_amount > 20){
        res.redirect('/librarian');
    }
    else if(status == 'on loan'){
        res.redirect('/librarian');
    }
    else if(overdue){
        res.redirect('/librarian');
    }
    else{
        db.query(query,post,(err,result,fields) => {
            checkError(err,res);
            res.redirect('/librarian');
        });
    }
})

router.put('/returnBook',(req,res) => {
    checkLoginLibrarian(req,res);

    let query = 'SELECT DATEDIFF(borrowed_date,CURRENT_DATE()) AS days,borrowed_id FROM book WHERE book_id = '+req.body.book_id;

    let days = 0,user_id;
    db.query(query,(err,result) => {
        checkError(err,res);
        if(result[0].days > 10){
            days = result[0].days -10;
        }
        user_id = result[0].borrowed_id;
    })

    let post;

    if(days>0){
        query = 'INSERT INTO fine SET ?';
        post = {
            user_id : user_id,
            fine_amount : 2*days,
            book_id : req.body.user_id
        }

        db.query(query,(err,result) => {
            checkError(err,res);
        })
    }

    query = 'UPDATE book SET ? WHERE book_id = '+req.body.book_id;

    post = {
        borrowed_date : null,
        borrowed_id : null,
        status : 'Available'
    }

    db.query(query,post,(err,result,fields) => {
        checkError(err,res);
        res.redirect('/librarian/');
    })


});

router.delete('/clearfine',(req,res) => {
    checkLoginLibrarian(req,res);

    let query = 'DELETE FROM fine WHERE user_id = '+ req.body.user_id;

    db.query(query,(err,result) => {
        checkError(err,res);
        res.render('librarianHome.ejs');
    })

})

router.post('/addUser',(req,res) => {
    checkLoginLibrarian(req,res);
    addUser(req,res)
    .then(() => {
        return;
    })
    .catch((error) => {
        console.log(error);
    })
})

router.put('/changePassword',(req,res) => {
    checkLoginLibrarian(req,res);

    let old_password = req.body.old_password;
    let new_password = req.body.new_password;

    let query = 'SELECT password FROM librarian WHERE librarian_id = '+req.session.librarian_id
})

module.exports = router;