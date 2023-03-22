import React from 'react';

const Card = ({item}) => {

    return (
        <div className='card'>
            <div className="card__content">
                <img src={`${item.image[0] === '.' ? '../' : ''}${item.image}`} alt={`${item.title} image`} className="card__img"/>
                <div className="card__prices">
                    <p className="card__price">{item.price}</p>
                    <p className="card__disc">-{item.discount}</p>
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