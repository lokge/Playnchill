import React, {useEffect, useState} from 'react';
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";

const Product = () => {

    const [product, setProduct] = useState([])
    const {id} = useParams()

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
            <div className="container">
                <div className="product__main">
                    <div className="product__block">
                        <img src={product.image} alt={product.title} className="product__main-img"/>
                    </div>
                    <div className="product__block"></div>
                </div>
            </div>
        </section>
    );
};

export default Product;