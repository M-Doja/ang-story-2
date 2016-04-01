var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  memberName: { required: true, type: String },
  photo: String,
  bio: String,
  location: String,
  statevisit: String,
  created: Date,
  deleted: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  blogs: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}
  ]
});

mongoose.model('Profile', ProfileSchema);
