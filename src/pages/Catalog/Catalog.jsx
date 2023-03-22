import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../utils/Context";
import Card from "../Card/Card";
import axios from "../../utils/axios";


const Catalog = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        axios('http://localhost:6969/products')
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получины'))
    },[])

    const {products, getAllProducts} = useContext(CustomContext)

    useEffect(() => {
        getAllProducts()
    },[])

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <aside className="catalog__aside catalog"></aside>
                    <div className="catalog__row">
                        {
                            games.map((item) => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;