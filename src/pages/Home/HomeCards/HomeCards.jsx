import React, { useState } from 'react';
import HomeCard from "./HomeCard/HomeCard"

const HomeCards = ({ games }) => {
    const [randomIndex] = useState(() => Math.floor(Math.random() * games.length));

    return (
        <div className="home__cards">
            {
                games.slice(randomIndex, randomIndex + 4).map((item) => (
                    <HomeCard key={item.id} item={item}/>
                ))
            }
        </div>
    );
};

export default HomeCards;