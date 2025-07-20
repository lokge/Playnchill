import React, {useContext} from 'react';
import {BsFillCheckCircleFill} from "react-icons/bs";
import {CustomContext} from "../../../../utils/Context";
import {NavLink} from "react-router-dom";

const HomeCard = ({item}) => {

    const {basket, addBasket} = useContext(CustomContext)

    return (
        <NavLink to={`/product/${item.id}`} style={{cursor: "pointer"}} className="home__card">
            <img className="home__card-image" src={item.images.bigImage} alt={item.images.bigImage ? item.title : ''}/>
            <div className="card__prices">
                <p className="card__price">{item.discount ? Math.trunc(item.price * (1 - item.discount / 100)) : item.price}$</p>
                <p className="card__disc">{item.discount > 0 ? `${item.discount}%` : '' }</p>
                <p className="card__original">{item.discount > 0 ? `${item.price}$` : ''}</p>
            </div>
            <h3 className="home__card-title">{item.title}</h3>
            <div className="home__card-btns">
                <div className="card__chose-cont">
                    {
                        basket.findIndex(item => item.id === item.id) > -1
                        ? <button type='button' className="card__key">
                                {
                                    item.contentType === 'Ключ' ? <BsFillCheckCircleFill fill='white'/> : ''
                                }
                            </button>
                            : <button type='button' onClick={() => addBasket(item)} className="card__key">
                                {
                                    item.contentType === 'Ключ' ? <BsFillCheckCircleFill fill='white'/> : ''
                                }
                            </button>
                    }
                    <p className="card__key-text">Ключ</p>
                </div>
                <div className="card__chose-cont">
                    {
                        basket.findIndex(item => item.id === item.id) > -1
                            ? <button type='button' className="card__key">
                            <span className="card__key-icon">
                                {
                                    item.contentType === 'Учетная запись' ? <BsFillCheckCircleFill fill='white'/> : ''
                                }
                            </span>
                            </button>
                            : <button type='button' onClick={() => addBasket(item)} className="card__key">
                            <span className="card__key-icon">
                                {
                                    item.contentType === 'Учетная запись' ? <BsFillCheckCircleFill fill='white'/> : ''
                                }
                            </span>
                            </button>
                    }
                    <p className="card__key-text">{item.service}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default HomeCard;