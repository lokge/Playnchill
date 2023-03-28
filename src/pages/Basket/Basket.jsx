import React, {useContext, useState} from 'react';
import {useTranslation} from "react-i18next";
import {AiOutlineHeart} from "react-icons/ai"
import {CgClose} from "react-icons/cg"
import Qiwi from '../../assets/basket/qiwi.png'
import WebMoney from '../../assets/basket/webMoney.png'
import {Link, useNavigate} from 'react-router-dom'
import {CustomContext} from "../../utils/Context";

const Basket = () => {

    const navigate = useNavigate()

    const {basket, plusBasket, minusBasket, delBasket, user} = useContext(CustomContext)

    const {t} = useTranslation()

    const [active, setActive] = useState(false)
    const [fav, setFav] = useState(false)


    return (
        <section className='basket'>
            <div className="container basket__cont">
                <div className="basket__row">
                    <div className="basket__main">
                        <div className="basket__header">
                            <h2 className="basket__title">{t('basket.basketTitle')}
                                <span className="basket__title-count">
                                {
                                    basket.length ? <p> {basket.length}</p> : ' Пуста'
                                }
                            </span></h2>
                            <div className="basket__login">
                                <h3 className="basket__login-title">{t('basket.basketLogin')}</h3>
                                <p className="basket__login-subtitle">{t('basket.basketDesc1')} <span className="basket__login-subtitle-text">{t('basket.basketDesc2')}</span></p>
                                <p className="basket__login-subtitle">{t('basket.basketDesc3')}</p>
                                {
                                    !user.email.length ? <button className="basket__login-btn"><Link to='/login'>{t('basket.basketBtn')}</Link></button> : <p className="basket__login-title">Вы успешно вошли в аккаунт</p>
                                }
                            </div>
                        </div>
                        <div className="basket__content">
                            {
                                basket.length ? <ul className="basket__list">
                                    {basket.map((item) => (
                                        <li key={item.id} className="basket__product">
                                            <div className="basket__product-box">
                                                <img  onClick={() => navigate(`/product/${item.id}`)} src={item.image} alt={item.title} className="basket__product-img"/>
                                            </div>
                                            <div className="basket__product-box">
                                                <h3 onClick={() => navigate(`/product/${item.id}`)} className="basket__product-title">{item.title}</h3>
                                                <div className="basket__product-prices">
                                                    <p className="basket__product-price">{item.price}</p>
                                                    <p className="basket__product-disc">-{item.discount}</p>
                                                    <p className="basket__product-original">{item.original}</p>
                                                </div>
                                                <div className="basket__product-desc">
                                                    <p className="basket__product-activate">
                                                        Регион активации
                                                        <span className="basket__product-activated">  {item.region}</span>
                                                    </p>
                                                    <p className="basket__product-activate">
                                                        Сервис активации
                                                        <span className="basket__product-activated">  {item.service}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="basket__product-box">
                                <span onClick={() => delBasket(item.id)} className="basket__product-icon">
                                    <CgClose size="15px" fill="rgba(255, 255, 255, 0.2)"/>
                                </span>
                                                <div className="basket__product-addition">
                                                    <p onClick={() => minusBasket(item.id)} className="basket__product-add">-</p>
                                                    <span className="basket__product-count">
                                                {basket.find(product => product.id === item.id).count}
                                            </span>
                                                    <p onClick={() => plusBasket(item.id)} className="basket__product-add">+</p>
                                                </div>
                                                <span onClick={() => setFav(prev => !prev)} className="basket__product-icon">
                                                    {
                                                        fav ? <AiOutlineHeart fill="red"/> : <AiOutlineHeart/>
                                                    }
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul> : <div className="basket__content-empty"><p className="basket__content-empty-text">Корзина пуста</p></div>
                            }
                            <ul className="basket__payments">
                                <li className={active === true ? "basket__payment-active" : "basket__payment" }>
                                    <div className="basket__payment-card">
                                        <label className="basket__payment-label">
                                            <input onClick={() => setActive(true)} className="basket__payment-input" type="radio"/>

                                            <h2 className="basket__payment-title">Электронные кошельки</h2>
                                        </label>
                                        <div className="basket__payment-method">
                                            <img src={Qiwi} alt="payment method" className="basket__payment-img"/>
                                            <img src={WebMoney} alt="payment method" className="basket__payment-img"/>
                                        </div>
                                    </div>
                                </li>
                                <li className={active === true ? "basket__payment-active" : "basket__payment" }>
                                    <div className="basket__payment-card">
                                        <label className="basket__payment-label">
                                            <input onClick={() => setActive(true)} className="basket__payment-input" type="radio"/>

                                            <h2 className="basket__payment-title">Электронные кошельки</h2>
                                        </label>
                                        <div className="basket__payment-method">
                                            <img src={Qiwi} alt="payment method" className="basket__payment-img"/>
                                            <img src={WebMoney} alt="payment method" className="basket__payment-img"/>
                                        </div>
                                    </div>
                                </li>
                                <li className={active === true ? "basket__payment-active" : "basket__payment" }>
                                    <div className="basket__payment-card">
                                        <label className="basket__payment-label">
                                            <input onClick={() => setActive(true)} className="basket__payment-input" type="radio"/>

                                            <h2 className="basket__payment-title">Электронные кошельки</h2>
                                        </label>
                                        <div className="basket__payment-method">
                                            <img src={Qiwi} alt="payment method" className="basket__payment-img"/>
                                            <img src={WebMoney} alt="payment method" className="basket__payment-img"/>
                                        </div>
                                    </div>
                                </li>
                                <li className={active === true ? "basket__payment-active" : "basket__payment" }>
                                    <div className="basket__payment-card">
                                        <label className="basket__payment-label">
                                            <input onClick={() => setActive(true)} className="basket__payment-input" type="radio"/>

                                            <h2 className="basket__payment-title">Электронные кошельки</h2>
                                        </label>
                                        <div className="basket__payment-method">
                                            <img src={Qiwi} alt="payment method" className="basket__payment-img"/>
                                            <img src={WebMoney} alt="payment method" className="basket__payment-img"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <aside className="basket__aside">
                        <div className="basket__aside-block">
                            <span className="basket__aside-count">
                                {
                                    basket.length ? <p>{basket.length} {t('basket.asideTotal')}</p> : <p>Корзина пуста</p>
                                }
                            </span>
                            <p className="basket__aside-total">
                                {
                                    basket.map((item) => (
                                        <span key={item.id}>{item.price * item.count}</span>
                                    ))
                                }
                            </p>
                            <button className="basket__aside-btn">{t('basket.asideBtn')}</button>
                            <div className="basket__aside-label">
                                {t('basket.asideCheck')} <a href="https://www.youtube.com/watch?v=1GpkiX13OHw&t=1376s" className="basket__aside-link">
                                      {t('basket.asideLink')}
                                </a>
                            </div>
                        </div>
                        <div className="basket__aside-block">
                            <p className="basket__aside-discount"><span className="basket__aside-percent">% </span>{t('basket.asideCoupon')}</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Basket;