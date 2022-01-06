import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addCarToFavorites, removeCarFromFavorites } from '../redux/favoritesSlice';

export default function Favorites() {
    const dispatch = useDispatch();
    const favoriteCars = useSelector(state => state.favorites.cars);
    const [cars, setCars] = useState(favoriteCars);
    
    useEffect(()=> {
        setCars(favoriteCars);
    }, [favoriteCars]);

    const handleRemoveFromCart = (car) => {
        console.log(car);
        dispatch(removeCarFromFavorites(car));
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <Link to='/'>
                        <h1 style={{padding: '40px 0'}}>Go to Homepage</h1>
                    </Link>
                    <h1 style={{paddingBottom: '20px'}}>Car Details</h1>
                    <div>
                        {cars?.map((car) => (
                        <div key={car.id} style={{border: '1px solid black', padding: '10px'}}>
                                <h1>Brand: {car.brand}</h1>
                                <h1>Model: {car.model}</h1>
                                <h1>Year: {car.year}</h1>
                                <h1>Color: {car.color}</h1>                        
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button onClick={() => handleRemoveFromCart(car)}>Remove car from favorites</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
