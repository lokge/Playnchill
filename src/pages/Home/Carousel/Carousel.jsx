import React, {useEffect, useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper";
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

    const [randomIndex] = useState(() => Math.floor(Math.random() * games.length));

    return (
        <div className="home__swiper">
            <div className="home__swiper-row">
                <Swiper
                    rewind={true}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Delay between slides in milliseconds (e.g., 3 seconds)
                        disableOnInteraction: true, // Set to false to restart autoplay after user interaction
                        pauseOnMouseEnter: true, // Pause autoplay when the mouse enters the Swiper container
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        games.slice(randomIndex, randomIndex + 3).map((item) => (
                            <SwiperSlide key={item.id}>
                                <img style={{cursor: "pointer"}} onClick={() => navigate(`/product/${item.id}`)} className='home__swiper-img' src={item.images?.bannerImage} alt={item.title}/>
                                <div className="home__swiper-desc">
                                    <p className="home__swiper-title">{item.title}</p>
                                    <p className="home__swiper-description">{item.description}</p>
                                    <div className="home__swiper-prices">
                                        <p className="home__swiper-price">{item.discount > 0 ? <span>{Math.trunc(item.price * (1 - item.discount / 100))}</span> : item.price}$</p>
                                        <p className="home__swiper-discount">{item.discount > 0 ? <span className="item__discount-count">-{item.discount}$</span> : ''}</p>
                                        <p className="home__swiper-original">{item.discount > 0 ? `${item.price}$` : ''}</p>
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