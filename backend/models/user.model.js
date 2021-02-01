const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Trims whitespaces off, if user puts some spaces behind username
      minlength: 3,
    },
  },
  {
    timestamps: true, // will automatically create timestamps for when the user was created and modified
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
