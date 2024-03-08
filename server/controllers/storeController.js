const axios = require('axios');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}


// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await axios.get('https://fakestoreapi.com/products');
        res.json(products.data);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Get specific category
const getCollection = async (req, res) => {
    try {
        const collection = await axios.get(`https://fakestoreapi.com/products/category/${req.params.id}`);
        res.json(collection.data);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Signup new user which fires code from the user Model
const signupUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const user = await User.signup(email, password, name);

        // create token
        const token = createToken(user._id);
        const userName = user.name;

        res.status(201).json({ userName, token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        // create token
        const token = createToken(user._id);
        const userName = user.name;

        res.status(201).json({ userName, token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = { getAllProducts, getCollection, signupUser, loginUser }