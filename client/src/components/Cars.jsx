import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Car from './Car';

export default function Cars() {
    const [cars, setCars] = useState([]);

    // get cars when the page is first rendered
    useEffect(() => {
        const getCars = async() => {
            try{
                const response = await axios.get('http://localhost:5000/api/cars')
                setCars(response.data);
            }catch(err){
                console.log(`Error fetching cars error: ${err}`);
            }
        }
        getCars();
    }, []);
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {cars?.slice(0,9).map((item) => (
                <div style={{width: '32%'}}>
                    <Car key={item._id} item={item}/>
                </div>
                )
            )}
        </div>
    )
}
