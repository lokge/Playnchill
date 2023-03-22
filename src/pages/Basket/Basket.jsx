import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Minecraft from '../../assets/basket/minecraft.png'
import {AiOutlineHeart} from "react-icons/ai"
import {CgClose} from "react-icons/cg"
import Qiwi from '../../assets/basket/qiwi.png'
import WebMoney from '../../assets/basket/webMoney.png'

const Basket = () => {

    const {t} = useTranslation()

    const [active, setActive] = useState(false)

    return (
        <section className='basket'>
            <div className="container basket__cont">
                <div className="basket__row">
                    <div className="basket__header">
                        <h2 className="basket__title">{t('basket.basketTitle')} <span className="basket__title-count">5</span></h2>
                        <div className="basket__login">
                            <h3 className="basket__login-title">{t('basket.basketLogin')}</h3>
                            <p className="basket__login-subtitle">{t('basket.basketDesc1')} <span className="basket__login-subtitle-text">{t('basket.basketDesc2')}</span></p>
                            <p className="basket__login-subtitle">{t('basket.basketDesc3')}</p>
                            <button className="basket__login-btn">{t('basket.basketBtn')}</button>
                        </div>
                    </div>
                    <aside className="basket__aside">
                        <div className="basket__aside-block">
                            <span className="basket__aside-count">5 {t('basket.asideTotal')}</span>
                            <p className="basket__aside-total">4 999 Р</p>
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
                    <div className="basket__content">
                        <p className="basket__content-empty">Корзина пуста</p>
                        <div className="basket__product">
                            <div className="basket__product-box">
                                <img src={Minecraft} alt="game image" className="basket__product-img"/>
                            </div>
                            <div className="basket__product-box">
                                <h3 className="basket__product-title">Minecraft</h3>
                                <div className="basket__product-prices">
                                    <p className="basket__product-price">349 Р</p>
                                    <p className="basket__product-disc">-25%</p>
                                    <p className="basket__product-original">599 Р</p>
                                </div>
                                <div className="basket__product-desc">
                                    <p className="basket__product-activate">
                                        Регион активации
                                        <span className="basket__product-activated">  Россия и страны СНГ</span>
                                    </p>
                                    <p className="basket__product-activate">
                                        Сервис активации
                                        <span className="basket__product-activated">  Steam</span>
                                    </p>
                                </div>
                            </div>
                            <div className="basket__product-box">
                                <span className="basket__product-icon">
                                    <CgClose size="15px" fill="rgba(255, 255, 255, 0.2)"/>
                                </span>
                                <div className="basket__product-addition">
                                    <p className="basket__product-add">-</p>
                                    <span className="basket__product-count">1</span>
                                    <p className="basket__product-add">+</p>
                                </div>
                                <span className="basket__product-icon">
                                    <AiOutlineHeart/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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
        </section>
    );
};

export default Basket;