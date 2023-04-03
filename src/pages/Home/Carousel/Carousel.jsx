import React, {useEffect, useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "../../../utils/axios";
import {CustomContext} from "../../../utils/Context";


const Carousel = () => {

    const [games, setGames] = useState([])

    const {basket, addBasket, addFavorite} = useContext(CustomContext)

    useEffect(() => {
        axios(`/products?`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[])

    return (
        <div className="home__swiper">
            <div className="home__swiper-row">
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        games.map((item) => (
                            item.bannerImage === ""
                                ? ''
                                : <SwiperSlide key={item.id}>
                                     <img className='home__swiper-img' src={item.bannerImage} alt="game content"/>
                                     <span className="home__swiper-logo">
                                        <img src={item.logoImage} alt={item.title} className="home__swiper-desc-img"/>
                                     </span>
                                     <div className="home__swiper-desc">
                                    <p className="home__swiper-description">{item.smallDesc}</p>
                                    <div className="home__swiper-prices">
                                        <p className="home__swiper-price">{item.price}</p>
                                        <p className="home__swiper-discount">-{item.discount}</p>
                                        <p className="home__swiper-original">{item.price}</p>
                                    </div>
                                    <div className="home__swiper-btns">
                                        <button type='button' onClick={() => addBasket(item)} className="home__swiper-btn">В корзину</button>
                                        <button onClick={() => addFavorite(item)} className="home__swiper-btn">В избранное</button>
                                    </div>
                                </div>
                                  </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;