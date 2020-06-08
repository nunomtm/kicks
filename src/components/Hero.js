import React from 'react';
import GetData from '../components/GetData';


function Hero() {
    
    return (
        <div className="heroContainer">
            <h2>Trending <span>Kicks</span></h2>

            <div className="wrapper">
                <GetData />
            </div>

        </div>
    )
}

export default Hero
