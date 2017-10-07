var User = require('../models/user');
var Recipe = require('../models/recipe');
var Evaluation = require('../models/evaluation');

var jwt = require('jsonwebtoken');
var secret = 'valarmorghulis';

// Export routes to the main server.js file
module.exports = function(router) {
    router.post('/profile', function(req, res) { //enregistrer un profil
        if (req.body.username == null || req.body.username == ''
         || req.body.password == null || req.body.password == ''
         || req.body.age == null || req.body.age == ''
         || req.body.phoneNumber == null|| req.body.phoneNumber == ''
         || req.body.e_mail == null || req.body.e_mail == '') {
            res.json({ success: false, message: 'form is not complete' });
        }
        else {
            var user = new User();
            user.username = req.body.username;
            user.setPassword(req.body.password);
            user.age = req.body.age;
            user.phoneNumber = req.body.phoneNumber;
            user.e_mail = req.body.e_mail;
            user.save(function(err) { //sauver dans la base de données
                if (err) {
                    res.json({ success: false, message: 'Cet identifiant existe déja ou faute de format d entrée' });
                } else {
                    res.json({ success: true, message: 'user created!' }); //utilisateur a été sauvé, renvoyer réponse
                }
            });
        }
    });



    router.post('/login', function(req, res) { //login d'un utilisateur
        if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == ''){
            res.json({ success: false, message: 'Form is not completed' });
        }
        else{                                                   //attributs qu'on veut avoir dans variable user
            User.findOne({ username: req.body.username}).select('username hash salt age phoneNumber e_mail').exec(function(err,user){
                if(err){
                    throw err;
                }
                if(!user){
                    res.json({success: false, message: 'Account does not exist' });
                }
                else if(user){            //= mot de passe soumis
                    if(user.checkPassword(req.body.password)){  //user est connecté
                        var token = jwt.sign({username: user.username, age: user.age,
                                           phoneNumber: user.phoneNumber, e_mail: user.e_mail}, secret, {expiresIn: '1h'});
                        res.json({ success: true, message: 'user loggs in' , token: token});
                    }
                    else{
                        res.json({ success: false, message: 'Wrong password'});
                        }
    }})}});

    router.use(function(req, res, next){ //middleware pour /getInfo
        var token = req.body.token || req.body.query || req.headers['x-access-token']; //récuperer le token de la requete
        if(token){ //si il y a un token
            jwt.verify(token, secret, function(err, decoded){
                if(err){
                    res.json({ success: false, message: 'token non valide' });
                }
                else{
                    req.decoded = decoded;    //maintenant accessible dans req de /getInfo
                    next(); // prochain route
                }
            });
        }
        else{
            res.json({ success: false, message: 'pas de token présent' });
        }
    });

    router.post('/getInfo', function(req, res){ //decrypte le token en utilisant middleware et renvoie au client
        res.send(req.decoded);
    });




    return router; // Retourne le router vers le serveur
}
