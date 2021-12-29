import React from 'react'
import Cars from '../components/Cars'

export default function Homepage() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '84%'}}>
                <div style={{height: '30vh'}}>
                    <Cars/>
                </div>
            </div>
        </div>
    )
}
