const router = require('express').Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if(user){
        res.status(404).send('User not found');
    }else{
        res.status(200).send(user);
    }
});

router.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).send(savedUser);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router; 