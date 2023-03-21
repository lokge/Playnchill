import React from 'react';
import BasketBg from '../Basket/basketContent/basketBg.png'

const Basket = () => {
    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__header">
                    <h2 className="basket__title">Корзина <span className="basket__title-count">5</span></h2>
                    <div style={{backgroundImage: "url={BasketBg}"}} className="basket__login">
                        <h3 className="basket__login-title">Войдите или зарегистрируйтесь</h3>
                        <p className="basket__login-subtitle">Вы сможете накапливать бонусные рубли
                            и использовать их при оплате до 50% стоимости товаров.</p>
                        <button className="basket__login-btn">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;