const express = require('express');

const { getAllProducts, getCollection, signupUser, loginUser } = require('../controllers/storeController');

const router = express.Router();


// get all products
router.get('/products', getAllProducts);

// get specific collection  
router.get('/products/category/:id', getCollection);

// Signup new user
router.post('/signup', signupUser);

// Login user
router.post('/login', loginUser);


module.exports = router;