const router = require('express').Router();
const Car = require('../models/Car');
const ExpressRedisCache = require('express-redis-cache');

const cache = ExpressRedisCache({})

// get all cars
// or get all cars by filter
router.get('/', cache.route(), async (req, res) => {
    const year = req.query.year;
    const gteOrlte = req.query.yearType;
    try{
        let cars;
        if(year && gteOrlte === 'gte'){
            cars = await Car.find({
                year: {
                    $gte: year,
                },
            });
        }else if(year && gteOrlte === 'lte'){
            cars = await Car.find({
                year: {
                    $lte: year,
                },
            });
        }else{
            cars = await Car.find();
            if(cars.length < 1){
                res.status(200).send('No cars found in the database');
            }
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
        res.status(200).send(savedCar);
    }catch(err){
        res.status(500).send(err);
    }
});

// delete a car
router.delete('/:id', async (req, res) => {
    const carToDelete = Car.findById(req.params.id);
    try{
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).send(`Brand: ${carToDelete.brand}, Model: ${carToDelete.model} has been deleted`);
    }catch(err){
        res.status(500).send(err);
    }
});

// update a car
router.post('/:id', async (req, res) => {
    try{
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body
            },
            {new: true}
        );
        res.status(200).send(`Cars has been updated to ${updatedCar}`);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;