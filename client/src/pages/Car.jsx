import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addCarToFavorites, removeCarFromFavorites } from '../redux/favoritesSlice';

export default function Car() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    const [carData, setCarData] = useState({});
    const favorites = useSelector(state => state.favorites.quantity);

    useEffect(() => {
        console.log(id);
        const getCar = async() => {
            try{
                const response = await axios.get(`http://localhost:5000/api/cars/${id}`);
                setCarData(response.data);
                console.log(carData);
            }catch(err){
                console.log(`Error fetching cars error: ${err}`);
            }
        }
        getCar();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addCarToFavorites({...carData, carData}));
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <Link to='/favorites'>
                        <h1 style={{padding: '40px 0'}}>My favorite cars: {favorites}</h1>
                    </Link>
                    <h1>Car Details</h1>
                    <h1>Brand: {carData.brand}</h1>
                    <h1>Model: {carData.model}</h1>
                    <h1>Year: {carData.year}</h1>
                    <h1>Color: {carData.color}</h1>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={handleAddToCart}>Add car to favorites</button>
            </div>
        </div>
    )
}
