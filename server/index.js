require('dotenv').config();

// Code to start the server
const express = require('express');

// Express app
const app = express();
const routes = require('./routes/store');
const cors = require('cors');

const mongoose = require('mongoose');


// Middleware
app.use(cors());
app.use(cors({ origin: 'https://urbanique.vercel.app' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api', routes);

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and server is running on port 3005");
        });
    })
    .catch((err) => console.log(err));


