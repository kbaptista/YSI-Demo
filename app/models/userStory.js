var mongoose = require('mongoose');

var usSchema = new mongoose.Schema();
usSchema.add({
    name : String,
    description : String,
    effort : String,
    priority : String,
    idTasks : [],
    idProject : String
});

var UserStroy = mongoose.model('UserStroy',usSchema);
exports.schema = usSchema;
exports.model = UserStroy;