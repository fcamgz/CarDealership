import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addCar } from '../redux/favoritesSlice';

export default function Car({item}) {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        <Link to={`/car/${item._id}`}>
          <div>
            <img src={item.img} alt={`no-pic`}/>
            <h2>Brand: {item.brand}</h2>
            <h2>Model: {item.model}</h2>
            <h2>Year: {item.year}</h2>
            <h2>Color: {item.color}</h2>
          </div>
        </Link>
      </div>
    )
}
