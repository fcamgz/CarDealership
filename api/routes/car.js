const router = require('express').Router();
const Car = require('../models/Car');

// get all cars
router.get('/', async (req, res) => {
    try{
        const cars = await Car.find();
        if(cars.length < 1){
            res.status(200).send('-1');
        }
        res.status(200).send(cars);
    }catch(err){
        res.status(500).send(err);
    }
});

// get a single car
router.get('/:id', async (req, res) => {
    try{
        const car = await Car.findById(req.params.id);
        res.status(200).send(car);
    }catch(err){
        res.status(500).send(err);
    }
})

// add a car
router.post('/add', async (req, res) => {
    const newCar = new Car(req.body);
    try{
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;