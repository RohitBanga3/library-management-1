const router = require('express').Router();
const db = require('../services/db');
const { route } = require('./user');

function checkLoginLibrarian(req,res){
    if(req.session.librariankey != keys.librariankey){
        res.redirect('../auth/logout');
    }
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



module.exports = router;