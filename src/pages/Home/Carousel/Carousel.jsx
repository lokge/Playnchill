import React, {useEffect, useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "../../../utils/axios";
import {CustomContext} from "../../../utils/Context";
import {useNavigate} from "react-router-dom";


const Carousel = () => {

    const navigate = useNavigate()

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
                                     <img style={{cursor: "pointer"}} onClick={() => navigate(`/product/${item.id}`)} className='home__swiper-img' src={item.bannerImage} alt="game content"/>
                                     <span className="home__swiper-logo">
                                        <img src={item.logoImage} alt={item.title} className="home__swiper-desc-img"/>
                                     </span>
                                     <div className="home__swiper-desc">
                                    <p className="home__swiper-description">{item.smallDesc}</p>
                                    <div className="home__swiper-prices">
                                        <p className="home__swiper-price">{item.discount > 0 ? <span>{Math.trunc(item.price - item.price / 100 * item.discount)}</span> : item.price}</p>
                                        <p className="home__swiper-discount">{item.discount > 0 ? <span className="item__discount-count">-{item.discount}$</span> : ''}</p>
                                        <p className="home__swiper-original">{item.discount > 0 ? item.price : ''}</p>
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