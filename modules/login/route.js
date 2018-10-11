var express = require('express');
var router = express.Router();


router.post('', (req, res)=> {

    var email = req.body.email;
    var senha = req.body.senha;
    console.log(email)

    if (email == "demo@demo.com" && senha == "123"){
        res.json({msg:"Login OK", "email":email, "nome":"Demo User"})
    }else{
        res.json({msg:"Login ou Senha inválidos"})
    }
})

module.exports = router;