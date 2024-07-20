const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  BloodPressure: {
    type: Number,
    required: true,
  },
  Weight: {
    type: Number,
    required: true,
  },
  Height: {
    type: Number,
    required: true,
  },
  AnyMedicineCurrentTake: {
    type: String,
    required: true,
  },
  BodyTemperature: {
    type: Number,
    required: true,
  },
  SleepTime: {
    type: Number,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  }
});

// const Product = mongoose.model('Product', productSchema);
module.exports = mongoose.model('Userdata', userSchema);

// module.exports = Product;
