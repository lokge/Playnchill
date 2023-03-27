import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Carousel1 from "../Carousel/CarouselContent/carousel1.png"
import Carousel2 from "../Carousel/CarouselContent/carousel2.png"
import Carousel3 from "../Carousel/CarouselContent/carousel3.png"
import nfsLogo from "../Carousel/CarouselContent/nfsLogo.png"



const Carousel = () => {

    return (
        <div className="home__swiper">
            <div className="home__swiper-row">
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='home__swiper-img' src={Carousel1} alt="game content"/>
                        <span className="home__swiper-logo">
                        <img src={nfsLogo} alt="game logo" className="home__swiper-desc-img"/>
                        </span>
                        <div className="home__swiper-desc">
                            <p className="home__swiper-description">Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
                            <div className="home__swiper-prices">
                                <p className="home__swiper-price">4 999 Р</p>
                                <p className="home__swiper-discount">-25%</p>
                                <p className="home__swiper-original">6 999 Р</p>
                            </div>
                            <div className="home__swiper-btns">
                                <button type='button' className="home__swiper-btn">В корзину</button>
                                <button className="home__swiper-btn">В избранное</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='home__swiper-img' src={Carousel2} alt="game content"/>
                        <span className="home__swiper-logo">
                            <img src={nfsLogo} alt="game logo" className="home__swiper-desc-img"/>
                        </span>
                        <div className="home__swiper-desc">
                            <p className="home__swiper-description">Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
                            <div className="home__swiper-prices">
                                <p className="home__swiper-price">4 999 Р</p>
                                <p className="home__swiper-discount">-25%</p>
                                <p className="home__swiper-original">6 999 Р</p>
                            </div>
                            <div className="home__swiper-btns">
                                <button className="home__swiper-btn">В корзину</button>
                                <button className="home__swiper-btn">В избранное</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='home__swiper-img' src={Carousel3} alt="game content"/>
                        <span className="home__swiper-logo">
                            <img src={nfsLogo} alt="game logo" className="home__swiper-logo-img"/>
                        </span>
                        <div className="home__swiper-desc">
                            <p className="home__swiper-description">Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
                            <div className="home__swiper-prices">
                                <p className="home__swiper-price">4 999 Р</p>
                                <p className="home__swiper-discount">-25%</p>
                                <p className="home__swiper-original">6 999 Р</p>
                            </div>
                            <div className="home__swiper-btns">
                                <button className="home__swiper-btn">В корзину</button>
                                <button className="home__swiper-btn">В избранное</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;