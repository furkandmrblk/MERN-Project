const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  // This handles incoming http GET Requests
  User.find()
    .then((users) => res.json(users)) // Mongoose method; Its gonna get a list of all the users in the MongoDB database. We will get all the users from the database.
    .catch((err) => res.status(400).json('Error: ' + err)); // Catches errors
});

router.route('/add').post((req, res) => {
  // POST Request
  const username = req.body.username; // Getting the username

  const newUser = new User({ username }); // Creating new user with his username

  newUser
    .save() // Saves created new User
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
