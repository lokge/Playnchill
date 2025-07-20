import React, {useContext} from 'react';
import {useNavigate, NavLink} from "react-router-dom";
import {CustomContext} from "../../utils/Context";
import {BsFillCheckCircleFill} from "react-icons/bs"


const Card = ({item}) => {

    const navigate = useNavigate()

    const {basket, addBasket} = useContext(CustomContext)

    return (
        <NavLink to={`/product/${item.id}`} className='card'>
            <img src={item.images.main} alt={item.title} className="card__img"/>
            <div className="card__prices">
                <p className="card__price">{item.discount > 0 ? <span>{Math.trunc(item.price * (1 - item.discount / 100))}$</span> : `${item.price}$`}</p>
                <p className="card__disc">{item.discount > 0 ? <span className="item__discount-count">-{item.discount}%</span> : ''}</p>
                <p className="card__original">{item.discount > 0 ? `${item.price}$` : ''}</p>
            </div>
            <h3 className="card__title">
                {item.title}
            </h3>
            <div className="card__chose">
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

export default Card;