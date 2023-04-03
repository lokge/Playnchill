import React from 'react';
import {Link} from "react-router-dom";

const ProductTabs = ({product, status}) => {
    return (
        <div className="product__tabs">
            <div className="product__tab" style={{display: status === 'description' ? 'block' : 'none' }}>
                <h5 className="product__about-title">О чем {product.title}?</h5>
                <p className="product__about-text">{product.description}</p>
            </div>
            <div className="product__tab" style={{display: status === 'system' ? 'block' : 'none' }}>
                <h5 className="product__about-title">Системные требования {product.title}</h5>
                <div className="product__tab-content">
                    <div className="product__tab-descriptions">
                        <h5 className="product__tab-title">Минимальные:</h5>
                        <div className="product__tab-block">
                            <div className="product__tab-box">
                                <p className="product__tab-text">OC</p>
                                <p className="product__tab-text">Процессор</p>
                                <p className="product__tab-text">Видеокарта</p>
                                <p className="product__tab-text">Оперативная память</p>
                                <p className="product__tab-text">Место на диске</p>
                            </div>
                            <div className="product__tab-box">
                                <p className="product__tab-ans">{product.minSystem}</p>
                                <p className="product__tab-ans">{product.minSystem}</p>
                                <p className="product__tab-ans">{product.minSystem}</p>
                                <p className="product__tab-ans">{product.minSystem}</p>
                                <p className="product__tab-ans">{product.minSystem}</p>
                            </div>
                        </div>
                    </div>
                    <div className="product__tab-descriptions">
                        <h5 className="product__tab-title">Рекомендуемые:</h5>
                        <div className="product__tab-block">
                            <div className="product__tab-box">
                                <p className="product__tab-text">OC</p>
                                <p className="product__tab-text">Процессор</p>
                                <p className="product__tab-text">Видеокарта</p>
                                <p className="product__tab-text">Оперативная память</p>
                                <p className="product__tab-text">Место на диске</p>
                            </div>
                            <div className="product__tab-box">
                                <p className="product__tab-ans">{product.recSystem}</p>
                                <p className="product__tab-ans">{product.recSystem}</p>
                                <p className="product__tab-ans">{product.recSystem}</p>
                                <p className="product__tab-ans">{product.recSystem}</p>
                                <p className="product__tab-ans">{product.recSystem}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__tab" style={{display: status === 'activate' ? 'block' : 'none' }}>
                <h5 className="product__about-title">Активация {product.title}</h5>
                <ol className="product__tab-list">
                    <li className="product__about-text">1. Получите оплаченный товар в разделе <span className="product__about-text-link"><Link to="/basket">Корзина</Link></span></li>
                    <li className="product__about-text">2. Если не установлен {product.service} клиент, скачайте его для Windows (клиент также доступен на Mac и Linux) и установите.</li>
                    <li className="product__about-text">3. Запустите {product.service}, зайдите в свой аккаунт или зарегистрируйте новый, если у вас его еще нет.</li>
                    <li className="product__about-text">4. Войдите в меню «Игры» и выберите пункт «Активировать через {product.service}».</li>
                    <li className="product__about-text">5. Примите соглашение подписчика {product.service}</li>
                    <li className="product__about-text">6. Введите ключ активации (для его получения необходимо купить {product.title}).</li>
                    <li className="product__about-text">7. После активации вам будет предложено скачать игру {product.title}).</li>
                </ol>
            </div>
        </div>
    );
};

export default ProductTabs;