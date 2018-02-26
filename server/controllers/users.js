var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = {

    login: function (req, res) {
        User.find({ name: req.body.name }, function (err, users) {
            if (users.length < 1) {
                User.create({ name: req.body.name }, function (err, user) {
                    req.session.user = user
                    req.session.save();
                })
            } else {
                req.session.user = users[0];
            }


            res.json({ user: req.session.user })
        })
    },

    checkSession: function (req, res) {
        if (req.session.user == undefined) {
            return res.json({ user: null })
        } else {
            return res.json({ user: req.session.user })
        }
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },  

    addQuestion: function(req, res) {
        // console.log(req.session.user)
        Question.create({content: req.body.content, creator: req.session.user.name, option1: req.body.option1, option2: req.body.option2, _user: req.session.user}, function(err, questionCreated){
            res.json(questionCreated);
        })
    },

    showAll: function (req, res) {
            Question.find({}, function (err, questions) {
                res.json(questions);
            })
    },

    delete: function(req, res){
        Question.findByIdAndRemove(req.params.id, function(err, question){
            if(err){
            }
            else {
                res.redirect('/home');
            }
        })
    },

    getOneQuestion: function(req, res) {
        Question.findById(req.params.id, function(err, questionFound){
            // console.log(req.params, questionFound)
            res.json(questionFound)
        })
    },

    addVote: function(req,res){
        Question.findOne({_id: req.params.id}).exec(function(err, question){
            // console.log(req.params)
            if(req.params.option == 1){
                question.opt1++;
            } else if(req.params.option == 2){
                question.opt2++;
            }
            // console.log(question.opt1)
            // console.log('hey after like', quote)
            question.save(function(err){
            res.json(question)
            })   
        })
    }


}