var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    content: String,
    creator: String,
    option1: String,
    opt1: {
        type: Number,
        default: 0
    },
    option2: String,
    opt2: {
        type: Number,
        default: 0 
    },
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
},
    {usePushEach: true});

mongoose.model('Question', QuestionSchema);
