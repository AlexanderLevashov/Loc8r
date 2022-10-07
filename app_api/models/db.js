var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost:27017';
// if (process.env.NODE_ENV === 'production') {
  // dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI);

// var reviewSchema = new mongoose.Schema({
//   author: String,
//   rating: {type: Number, required: true, min: 0, max: 5},
//   reviewText: String,
//   createdOn: {type: Data, default: Date.now}
// });

//#region Перехват событий
var readline = require("readline");
if(process.platform == "win32") {
  var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ("SIGINT", function() {
      process.emit("SIGINT");
  });
}
//#endregion Перехват событий

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

//region Перезапуск nodemon
var gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through' + msg);
    callback();
  });
};
    
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
    
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
    
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});
//endregion Перезапуск nodemon

require('./locations.js');