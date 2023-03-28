import React, {useContext, useState, useEffect} from 'react';
import Carousel from "./Carousel/Carousel";
import Card from "../Card/Card";
import axios from "../../utils/axios";
import {Link} from "react-router-dom";
import HomeCards from "./HomeCards/HomeCards";
import DoubleSwipe from "./DoubleSwipe/DoubleSwipe";
import {CustomContext} from "../../utils/Context";

const Home = () => {

    const {addBasket} = useContext(CustomContext)
    const [games, setGames] = useState([])

    useEffect(() => {
        axios(`/products?`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[])

    return (
        <section className='home'>
            <div className="container">
                <Carousel/>
                <div className="home__row">
                    {
                        games.slice(10, 15).map((item) => (
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
                <div className="home__row">
                    <DoubleSwipe/>
                </div>

                <div className="home__row">
                    {
                        games.slice(0, 10).map((item) => (
                            <Card key={item.id} item={item}/>
                        ))
                    }
                    <div className="home__row-link"><Link to='catalog/all'>Перейти в каталог</Link></div>
                </div>
                <h2 className="home__cards-title">Акции и скидки <span style={{fontSize: "32px"}} className="basket__aside-percent">%</span></h2>
                <HomeCards games={games} setGames={setGames}/>
            </div>
        </section>
    );
};

export default Home;