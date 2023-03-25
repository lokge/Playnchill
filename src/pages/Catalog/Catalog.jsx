import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../utils/Context";
import axios from "../../utils/axios";
import Card from "../Card/Card";
import {useNavigate, useParams} from "react-router-dom";
import CatalogSelect from "./CatalogSelect/CatalogSelect";
import {gameData} from "../../utils/gameData"


const Catalog = () => {

    const [games, setGames] = useState([])

    const {category} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios(`/products?${category !== 'all' ? 'category=' + category : ''}`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[category])

    const {products, getAllProducts} = useContext(CustomContext)

    useEffect(() => {
        getAllProducts()
    },[])

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <aside className="catalog__aside">
                        <label className="catalog__aside-label">
                            <select onChange={(e) => {navigate(`/catalog/${e.target.value}`)}} name="" id="" className="catalog__aside-select">
                                {
                                    gameData.map((item) => (
                                        <option selected={item.en === category} key={item.en} value={item.en}>{item.ru}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </aside>
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