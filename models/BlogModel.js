var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: { required: true, type: String },
  subject: String,
  body: String,
  photo: String,
  created: Date,
  deleted: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{
      commenter: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        body: String,
        postedOn: Date
      }]
});

mongoose.model('Blog', BlogSchema);
