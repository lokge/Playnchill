import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../utils/Context";
import {BsFillCheckCircleFill} from "react-icons/bs"


const Card = ({item}) => {

    const navigate = useNavigate()

    const {basket, addBasket} = useContext(CustomContext)

    return (
        <div className='card'>
            <div className="card__content">
                <img onClick={() => navigate(`/product/${item.id}`)} src={item.image} alt={item.title} className="card__img"/>
                <div onClick={() => navigate(`/product/${item.id}`)} className="card__prices">
                    <p className="card__price">{item.price}</p>
                    <p className="card__disc">- {item.discount}
                    </p>
                    <p className="card__original">{item.price}</p>
                </div>
                <h3 onClick={() => navigate(`/product/${item.id}`)} className="card__title">
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
            </div>
        </div>
    );
};

export default Card;