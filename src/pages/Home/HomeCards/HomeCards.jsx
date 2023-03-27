import React from 'react';
import HomeCard from "./HomeCard/HomeCard"

const HomeCards = ({games, setGames}) => {
    return (
        <div className="home__cards">
            {
                games.map((item) => (
                    item.bigImage ? <HomeCard key={item.id} item={item}/> : ''
                ))
            }
        </div>
    );
};

export default HomeCards;