import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Card from '../Card/Card'
import axios from "../../utils/axios";

const Order = () => {

    const navigate = useNavigate()

    const [games, setGames] = useState([])

    useEffect(() => {
        axios(`/products?`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[])

    return (
        <section className="order">
            <div className="container">
                <h2 className="basket__title">Товар успешно <span className="basket__title-count">куплен</span></h2>
                <p style={{cursor: "pointer"}} onClick={() => navigate('/')} className="card__title">Вернуться на главную</p>


                <h2 className="basket__title">Вам также будет интересно</h2>
                <div className="product__recs-box">

                    {
                        games.slice(5, 9).map((item) => (
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Order;