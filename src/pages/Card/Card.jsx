import React from 'react';
import {useNavigate} from "react-router-dom";

const Card = ({item}) => {

    const navigate = useNavigate()

    return (
        <div className='card'>
            <div className="card__content">
                <img onClick={() => navigate(`/product/${item.id}`)} src={item.image} alt={item.title} className="card__img"/>
                <div className="card__prices">
                    <p className="card__price">{item.price}</p>
                    <p className="card__disc">-{item.discount}</p>
                    <p className="card__original">{item.price}</p>
                </div>
                <h3 className="card__title">
                    {item.title}
                </h3>
                <div className="card__chose">
                    <div className="card__chose-cont">
                        <button className="card__key"></button>
                        <p className="card__key-text">Ключ</p>
                    </div>
                    <div className="card__chose-cont">
                        <button className="card__key"></button>
                        <p className="card__key-text">Аккаунт Steam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;