import React, {useState, useEffect, useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {Pagination, Navigation, Autoplay} from "swiper";
import axios from "../../../utils/axios";
import heroes1 from "../../../assets/heroes1.png"
import heroes2 from "../../../assets/heroes2.png"
import mortred from "../../../assets/mortred.png"
import franklin from "../../../assets/franklin.png"
import {CustomContext} from "../../../utils/Context";

const DoubleSwipe = () => {

    const {addBasket} = useContext(CustomContext)

    const [games, setGames] = useState([])

    useEffect(() => {
        axios(`/products?`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    }, [])

    const [randomIndex] = useState(() => Math.floor(Math.random() * games.length));

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {
                        games.slice(randomIndex, randomIndex + 2).map((item) => (
                            <div key={item.id} className={`home__doubleSwipe-cont`}>
                                <div className="home__doubleSwipe">
                                    <div className="home__doubleSwipe-text">
                                        <h4 className="home__doubleSwipe-title">Играй уже сейчас в {item.title}</h4>
                                        <div className="home__doubleSwipe-prices">
                                            <p className="home__doubleSwipe-price">{item.discount > 0 ? <span>{Math.trunc(item.price * (1 - item.discount / 100))}</span> : item.price}$</p>
                                            <p className="home__doubleSwipe-discount">{item.discount > 0 ? <span className="item__discount-count">-{item.discount}%</span> : ''}</p>
                                            <p className="home__doubleSwipe-original">{item.discount > 0 ? `${item.price}$` : ''}</p>
                                        </div>
                                        <div className="home__doubleSwipe-btns">
                                            <button type='button' onClick={() => addBasket(item)} className="home__doubleSwipe-btn">Купить</button>
                                            <button type="button" className="home__doubleSwipe-btn">В избранное</button>
                                        </div>
                                    </div>
                                    <div className="home__doubleSwipe-img">
                                        <span className="home__doubleSwipe-imgCont">
                                            <img src={item?.images?.hero} alt={item.title} className="home__doubleSwipe-img"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        games.slice(randomIndex + 3, randomIndex + 5).map((item) => (
                            <div key={item.id} className="home__doubleSwipe-cont">
                                <div className="home__doubleSwipe">
                                    <div className="home__doubleSwipe-text">
                                        <h4 className="home__doubleSwipe-title">Играй уже сейчас в {item.title}</h4>
                                        <div className="home__doubleSwipe-prices">
                                            <p className="home__doubleSwipe-price">{item.discount > 0 ? <span>{Math.trunc(item.price * (1 - item.discount / 100))}</span> : item.price}$</p>
                                            <p className="home__doubleSwipe-discount">{item.discount > 0 ? <span className="item__discount-count">-{item.discount}%</span> : ''}</p>
                                            <p className="home__doubleSwipe-original">{item.discount > 0 ? `${item.price}$` : ''}</p>
                                        </div>
                                        <div className="home__doubleSwipe-btns">
                                            <button type='button' onClick={() => addBasket(item)} className="home__doubleSwipe-btn">Купить</button>
                                            <button type="button" className="home__doubleSwipe-btn">В избранное</button>
                                        </div>
                                    </div>
                                    <div className="home__doubleSwipe-img">
                                        <span className="home__doubleSwipe-imgCont">
                                            <img src={item?.images?.hero} alt={item.title} className="home__doubleSwipe-img"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DoubleSwipe;