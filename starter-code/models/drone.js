const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DroneSchema = new Schema({
  droneName : String,
  propellers : String,
  maxSize : Number,
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
