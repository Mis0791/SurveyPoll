var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    _questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
},
    {usePushEach: true});

mongoose.model('User', UserSchema);

