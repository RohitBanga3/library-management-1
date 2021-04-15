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
})

module.exports = router;