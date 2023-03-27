import React, {useState, useEffect, useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
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

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {
                        games.slice(0, 1).map((item) => (
                            item.update !== "true"
                                ? ''
                                : <div key={item.id} className="home__doubleSwipe-cont">
                                    <div className="home__doubleSwipe">
                                        <div className="home__doubleSwipe-text">
                                            <h4 className="home__doubleSwipe-title">Играй уже сейчас в {item.title}</h4>
                                            <div className="home__doubleSwipe-prices">
                                                <p className="home__doubleSwipe-price">{item.price}</p>
                                                <p className="home__doubleSwipe-discount">{item.discount}</p>
                                                <p className="home__doubleSwipe-original">{item.price}</p>
                                            </div>
                                            <div className="home__doubleSwipe-btns">
                                                <button type='button' onClick={() => addBasket(item)} className="home__doubleSwipe-btn">Купить</button>
                                                <button type="button" className="home__doubleSwipe-btn">В избранное</button>
                                            </div>
                                        </div>
                                        <div className="home__doubleSwipe-img">
                                             <span className="home__doubleSwipe-imgCont">
                                                 <img src={franklin} alt={item.title} className="home__doubleSwipe-img"/>
                                             </span>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                    {
                        games.slice(1, 2).map((item) => (
                            item.update !== "true"
                                ? ''
                                : <div key={item.id} className="home__doubleSwipe-cont home__doubleSwipe-cont-sec">
                                    <div className="home__doubleSwipe home__doubleSwipe-sec">
                                        <div className="home__doubleSwipe-text">
                                            <h4 className="home__doubleSwipe-title">Играй уже сейчас в {item.title}</h4>
                                            <div className="home__doubleSwipe-prices">
                                                <p className="home__doubleSwipe-price">{item.price}</p>
                                                <p className="home__doubleSwipe-discount">{item.discount}</p>
                                                <p className="home__doubleSwipe-original">{item.price}</p>
                                            </div>
                                            <div className="home__doubleSwipe-btns">
                                                <button type='button' onClick={() => addBasket(item)} className="home__doubleSwipe-btn">Купить</button>
                                                <button type="button" className="home__doubleSwipe-btn">В избранное</button>
                                            </div>
                                        </div>
                                        <div className="home__doubleSwipe-img">
                                             <span className="home__doubleSwipe-imgCont">
                                                  <img src={heroes1} alt={item.title}
                                                       className="home__doubleSwipe-img"/>
                                             </span>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        games.slice(7, 10).map((item) => (
                            item.update !== "true"
                                ? ''
                                : <div key={item.id} className="home__doubleSwipe-cont">
                                    <div className="home__doubleSwipe">
                                        <div className="home__doubleSwipe-text">
                                            <h4 className="home__doubleSwipe-title">Играй уже сейчас в {item.title}</h4>
                                            <div className="home__doubleSwipe-prices">
                                                <p className="home__doubleSwipe-price">{item.price}</p>
                                                <p className="home__doubleSwipe-discount">{item.discount}</p>
                                                <p className="home__doubleSwipe-original">{item.price}</p>
                                            </div>
                                            <div className="home__doubleSwipe-btns">
                                                <button type='button' onClick={() => addBasket(item)} className="home__doubleSwipe-btn">Купить</button>
                                                <button type="button" className="home__doubleSwipe-btn">В избранное</button>
                                            </div>
                                        </div>
                                        <div className="home__doubleSwipe-img">
                                           <span className="home__doubleSwipe-imgCont">
                                              <img src={heroes2} alt={item.title} className="home__doubleSwipe-img"/>
                                           </span>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                    {
                        games.slice(10, 20).map((item) => (
                            item.update !== "true"
                                ? ''
                                : <div key={item.id} className="home__doubleSwipe-cont">
                                    <div className="home__doubleSwipe home__doubleSwipe-sec">
                                        <div className="home__doubleSwipe-text">
                                            <h4 className="home__doubleSwipe-title">Играй уже сейчас в {item.title}</h4>
                                            <div className="home__doubleSwipe-prices">
                                                <p className="home__doubleSwipe-price">{item.price}</p>
                                                <p className="home__doubleSwipe-discount">{item.discount}</p>
                                                <p className="home__doubleSwipe-original">{item.price}</p>
                                            </div>
                                            <div className="home__doubleSwipe-btns">
                                                <button type='button' onClick={() => addBasket(item)} className="home__doubleSwipe-btn">Купить</button>
                                                <button type="button" className="home__doubleSwipe-btn">В избранное</button>
                                            </div>
                                        </div>
                                        <div className="home__doubleSwipe-img">
                                           <span className="home__doubleSwipe-imgCont">
                                              <img src={mortred} alt={item.title} className="home__doubleSwipe-img"/>
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