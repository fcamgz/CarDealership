import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Cars from '../components/Cars'

export default function Homepage() {
    const favorites = useSelector(state => state.favorites.quantity);
    const user = useSelector(state => state.user.user);
    return (
        <div style={{height: '100vh', width: '96vw', display: 'flex', justifyContent: 'center', overflowX: 'hdden'}}>
            <div style={{width: '84%'}}>
                <div>
                    <div>
                        <Link to='/favorites'>
                            <h3>My Favorite Cars: {favorites}</h3>
                        </Link>
                        {user ? <h4>Logged in {user.username}</h4> : ''}
                    </div>
                    <Cars/>
                </div>
            </div>
        </div>
    )
}
