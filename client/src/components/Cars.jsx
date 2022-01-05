import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Car from './Car';
import { Repeat } from '@material-ui/icons';

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
        <div>
            <h1>Cars Database</h1>
            <div>
        
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                {cars?.map((item) => (
                    <div>
                        <Car key={item._id} item={item}/>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}
