// import all dependencies
require("dotenv").config();
const express = require("express");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Users = require("./models/userSchema");
const authenticate = require('./middleware/authenticate')

const app = express();
const PORT = process.env.PORT;

// Add db connection file
require('./db/conn');

// Require Model
require('./models/userSchema');

// Methods used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("hello world");
})

// login user
app.post('/login', async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        
        // Find user if they exist
        const user = await Users.findOne({email: email});
        if(user){
            // verify password
            const isMatched = await bcryptjs.compare(password, user.password);

            if(isMatched){
                // generate token which i defined in the user schema
                const token = await user.generateToken();
                res.cookie('jwt', token, {
                    // expires in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send("logged in");
            } else{
                res.status(400).send('Invalid Credentials');
            }
        } else{
            res.status(400).send('Invalid Credentials');
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

// Registration
app.post('/register', async (req, res)=>{
    try{
        // get body or DATA
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        // Save method is used to create user or insert User
        // But before saving, the password will be hashed
        // from the function in the models file
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
})

// logout
app.get('/logout', (req, res) => {
    res.clearCookie('jwt', {path: '/'});
    res.status(200).send("User logged out");
})

// Authentication
app.get('/auth', authenticate, (req, res) => {

})


// run server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})