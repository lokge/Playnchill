import React from 'react';
import {CgClose} from "react-icons/cg";

const Favorite = () => {

    return (
        <section className="favorite">
            <div className="container">
                <h2 className="favorite__title basket__title">Избранные <span className="basket__title-count">5</span></h2>
                <div className="basket__content">
                    <div className="basket__content-empty"><p className="basket__content-empty-text">Нет избранных</p></div>
                    <ul className="favorite__list">
                        <div className="favorite__product-box">
                            <img src="" alt="image" className="basket__product-img"/>
                            <div className="favorite__product-descriptions">
                                <h3 className="basket__product-title">GTA</h3>
                                <div className="basket__product-prices">
                                    <p className="basket__product-price">1500</p>
                                    <p className="basket__product-disc">-15%</p>
                                    <p className="basket__product-original">2500</p>
                                </div>
                            </div>
                        </div>
                        <div className="favorite__product-box">
                                <span className="basket__product-icon">
                                    <CgClose size="15px" fill="rgba(255, 255, 255, 0.2)"/>
                                </span>
                            <div className="basket__product-addition">
                                <button type="button" className="favorite__addBasket">Добавить в корзину</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Favorite;