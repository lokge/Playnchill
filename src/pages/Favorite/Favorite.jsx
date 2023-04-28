import React, {useContext} from 'react';
import {CgClose} from "react-icons/cg";
import {CustomContext} from "../../utils/Context";
import {useNavigate} from "react-router-dom";

const Favorite = () => {

    const navigate = useNavigate()

    const {favorite, addFavorite, delFavorite, addBasket} = useContext(CustomContext)

    return (
        <section className="favorite">
            <div className="container">
                <h2 className="favorite__title basket__title">Избранные <span className="basket__title-count">{favorite.length ? <p>{favorite.length}</p> : 'Пусто'}</span></h2>
                <div className="basket__content">
                    {
                        favorite.length
                            ? <ul className="favorite__list">
                                {
                                    favorite.map((item) => (
                                        <li className="favorite__list-item">
                                            <div className="favorite__product-box">
                                                <img onClick={() => navigate(`/product/${item.id}`)} src={item.image} alt={item.title} className="basket__product-img"/>
                                                <div className="favorite__product-descriptions">
                                                    <h3 onClick={() => navigate(`/product/${item.id}`)} className="basket__product-title">{item.title}</h3>
                                                    <div className="basket__product-prices">
                                                        <p className="basket__product-price">{item.discount > 0 ? <span>{Math.trunc(item.price - item.price / 100 * item.discount)}</span> : item.price}</p>
                                                        <p className="basket__product-disc">{item.discount > 0 ? <span className="item__discount-count">-{item.discount}$</span> : ''}</p>
                                                        <p className="basket__product-original">{item.discount > 0 ? item.price : ''}</p>
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
                                            </div>
                                            <div className="favorite__product-box">
                                                <button onClick={() => delFavorite(item.id)} className="favorite__product-btn">
                                                    <span className="basket__product-icon">
                                                    <CgClose size="15px" fill="rgba(255, 255, 255, 0.2)"/>
                                               </span>
                                                </button>
                                                <div className="basket__product-addition">
                                                    <button type="button" onClick={() => addBasket(item)} className="favorite__addBasket basket__content-empty-text">Добавить в корзину</button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                             </ul>
                            : <div className="basket__content-empty"><p className="basket__content-empty-text">Нет избранных</p></div>
                    }


                </div>
            </div>
        </section>
    );
};

export default Favorite;