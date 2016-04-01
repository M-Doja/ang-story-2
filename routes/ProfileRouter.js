var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
var Blog = mongoose.model('Blog');
var Profile = mongoose.model('Profile');
var jwt = require('express-jwt');
var passport = require('passport');

// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});

console.log('user router');

router.param('id', function(req,res,next,id){
Profile
.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  // console.log(result);
  req.profile = result;
  next();
  });
});
      // ADDING PROFILE
router.post('/', auth,function(req,res,next){
  console.log('in profile route');
var profile = new Profile(req.body);
profile.save(function(err,result){
  res.send(result);
    });
  });

    // Show All Profiles
router.get('/', function(req, res, next) {
  console.log('show pro route');
  Profile.find({}, function(err, result) {
    if(err) return next(err);
    res.send(result);
  });
});

// EDIT Profile
router.put('/', function(req, res, next) {
Profile.update({_id: req.body.IDofProfileToEdit}, req.body.edittedProfile, function(err, result) {
if(err) return next(err);
if(!result) return next(err);
res.send(result);
});
});

// REMOVE Profile
router.delete('/:id', function(req, res, next){
Profile.remove({_id: req.params.id}, function(err, result){
if(err) return next(err);
res.send();
});
});

// router.get('/:id/story', function(req,res,next){
//   // console.log("HELLO!");
// // console.log(req.payload._id);
// Profile
//   .findOne({_id: req.params.id},'blogs',function(err,result){
//     if(err) return next(err);
//     if(!result) return next({err: "Couldnt find a user with that id"});
//     // console.log(result);
//   })
//   .populate('createdBy', 'user')
//   .exec(
//     function(err,result){
//       if(err) return next(err);
//       console.log(result);
//       res.send(result);
//     });
// });


module.exports = router;
