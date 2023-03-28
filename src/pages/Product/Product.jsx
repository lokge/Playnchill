import React, {useEffect, useState, useContext} from 'react';
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai"
import {CustomContext} from "../../utils/Context";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ProductImageCards from "./ProductImageCards/ProductImageCards";


const Product = () => {

    const [product, setProduct] = useState([])
    const {id, category} = useParams()

    const {addBasket} = useContext(CustomContext)

    useEffect(() => {
        axios(`http://localhost:6969/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => console.log('Ошибка при получении продукта'))
    }, [])

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
                                : "Не в наличии"}
                            </span>
                            <div className="product__prices">
                                <p className="product__price">{product.price}</p>
                                <p className="product__discount">{product.discount}</p>
                                <p className="product__original">{product.price}</p>
                            </div>
                            <div className="product__btns">
                                <button className="product__btn">Купить</button>
                                <button type='button' onClick={() => addBasket(product)} className="product__btn">В корзину</button>
                                <button className="product__btn"><AiOutlineHeart className="product__btn-icon"/></button>
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
                    <div className="product__header"></div>
                    <div className="product__about">
                        <h5 className="product__about-title">О чем {product.title}?</h5>
                        <p className="product__about-text">{product.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;