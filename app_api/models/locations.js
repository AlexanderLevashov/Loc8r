var mongoose = require('mongoose');
//var d = new Data();
//d.setHours(15);
//d.setMinutes(60);

var openingTimeSchema = new mongoose.Schema({
    days: {
      type: String,
      required: true
    },
    opening: String,
    closing: String,
    closed: {
      type: Boolean, 
      required: true
    }
});

var reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number, 
    required: true, 
    min: 0, 
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date, 
    "default": Date.now
  }
});

var locationSchema = new mongoose.Schema({
    name: {
      type: String, 
      required: true
    },
    address: String,
    rating: {
      type: Number, 
      "default": 0, 
      min: 0, 
      max: 5
    },
    facilities: [String],
    coords: {
      type: [Number], 
      index: '2dsphere'
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
 });

 mongoose.model('Location', locationSchema);