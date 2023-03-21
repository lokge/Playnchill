import React from 'react';
import {useTranslation} from "react-i18next";

const Basket = () => {

    const {t} = useTranslation()

    return (
        <section className='basket'>
            <div className="container">
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
                </div>
            </div>
        </section>
    );
};

export default Basket;