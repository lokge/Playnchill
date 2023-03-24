import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../utils/Context";
import axios from "../../utils/axios";
import Card from "../Card/Card";
import {useParams} from "react-router-dom";
import CatalogSelect from "./CatalogSelect/CatalogSelect";


const Catalog = () => {

    const [games, setGames] = useState([])

    const {category} = useParams()

    useEffect(() => {
        axios(`http://localhost:6969/products?category=${category}`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
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
                        <div className="catalog__row-header">
                            <h2 className="catalog__row-title">
                                Каталог товаров
                            </h2>
                            <CatalogSelect/>
                        </div>
                        <div className="catalog__row-cards">
                            {
                                games.map((item) => (
                                    <Card key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;