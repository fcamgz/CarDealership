const router = require('express').Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if(!user){
        res.status(404).send('User not found');
    }else{
        if(user.password === req.body.password){
            res.status(200).send(user);
        }else{
            res.status(500).send('Wrong password');
        }
    }
});

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    try{
        const savedUser = await newUser.save();
        res.status(200).send(savedUser);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router; 