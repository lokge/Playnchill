import React, {useEffect, useState, useContext} from 'react';
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai"
import {CustomContext} from "../../utils/Context";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ProductImageCards from "./ProductImageCards/ProductImageCards";
import Card from "../Card/Card";
import ProductTabs from "./ProductTabs/ProductTabs";


const Product = () => {

    const [games, setGames] = useState([])
    const [status, setStatus] = useState('description')

    useEffect(() => {
        axios(`/products?`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[])

    const [product, setProduct] = useState([])
    const {id} = useParams()



    const {basket, addBasket, addFavorite} = useContext(CustomContext)

    useEffect(() => {
        axios(`http://localhost:6969/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => console.log('Ошибка при получении продукта'))
    }, [product])

    if (JSON.stringify(product) === '{}'){
        return (
            <h2>Продукт не найдет</h2>
        )
    }
    return (
        <section className="product">
            <div className="product__main">
                <div className="container">
                    <div className="product__container">
                        <div className="product__main-imgCont">
                            <img src={product.image} alt={product.title} className="product__main-img"/>
                        </div>
                        <div className="product__block">
                            <h3 className="product__title">{product.title}</h3>
                            <span className="product__availability">{product.availability === "true"
                                ? <div className="product__check">
                                    <span style={{background: "#01CB62"}} className="product__checked"></span> <p className="product__true">В наличии</p>
                                </div>
                                : <div className="product__check">
                                    <span style={{background: "red"}} className="product__checked"></span> <p className="product__true">Нет в наличии</p>
                                </div>}
                            </span>
                            <div className="product__prices">
                                <p className="product__price">{product.price}</p>
                                <p className="product__discount">{product.discount}</p>
                                <p className="product__original">{product.price}</p>
                            </div>
                            <div className="product__btns">
                                <button className="product__btn">Купить</button>
                                <button type="button" onClick={() => addBasket(product)} className="product__btn">В корзину</button>
                                <button type="button" onClick={() => addFavorite(product)} className="product__btn"><AiOutlineHeart className="product__btn-icon"/></button>
                            </div>
                            <div className="product__description">
                                <span className="product__description-text">
                                    <p className="product__description-genre">Жанр</p>
                                    <p className="product__description-ans">{product.category}</p>
                                </span>
                                <span className="product__description-text">
                                    <p className="product__description-genre">Платформа</p>
                                    <p className="product__description-ans">{product.service}</p>
                                </span>
                                <span className="product__description-text">
                                    <p className="product__description-genre">Регион активации</p>
                                    <p className="product__description-ans">{product.region}</p>
                                </span>
                                <span className="product__description-text">
                                    <p className="product__description-genre">Тип товара</p>
                                    <p className="product__description-ans">{product.contentType}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <ProductImageCards product={product}/>
                </div>
            </div>

            <div className="product__descriptions">
                <div className="container">
                    <div className="product__header">
                        <button onClick={() => setStatus('description')} type="button" className={status === 'description' ? "product__header-sect-active" : "product__header-sect"}>Описание товара</button>
                        <button onClick={() => setStatus('system')} type="button" className={status === 'system' ? "product__header-sect-active" : "product__header-sect"}>Системные требования</button>
                        <button onClick={() => setStatus('activate')} type="button" className={status === 'activate' ? "product__header-sect-active" : "product__header-sect"}>Активация</button>
                    </div>
                    <div className="product__about">
                        <ProductTabs status={status} product={product}/>
                    </div>
                </div>
            </div>
            <div className="product__recs">
                <div className="container">
                    <h3 className="product__recs-title">Вам будет интересно</h3>
                    <div className="product__recs-box">
                        {
                            games.slice(15, 19).map((item) => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;