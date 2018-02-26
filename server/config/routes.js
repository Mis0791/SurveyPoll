var users = require('./../controllers/users');
var path = require("path");

module.exports = function(app){
    app.post('/login', function(req, res){
        users.login(req, res);
    });

    app.get('/checksess', function(req, res){
        users.checkSession(req, res);
    });

    app.get('/logout', function(req, res){
        users.logout(req, res);
    })

    app.post('/addQuestion', function(req, res){
        users.addQuestion(req, res);
    })

    app.get('/showAll', function(req, res){
        users.showAll(req, res);
    })

    app.get('/delete/:id', function(req, res){
        users.delete(req, res);
    })

    app.get('/getOneQuestion/:id', function(req, res){
        // console.log('hit that route!')
        users.getOneQuestion(req, res);
    })

    app.get('/addVote/:id/:option', function(req, res){
        // console.log("routinggggg")
        users.addVote(req, res);
    })

    app.all("**", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}