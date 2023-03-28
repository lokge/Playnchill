import React from 'react';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';


const ProductImageCards = ({product}) => {

    Fancybox.bind("#gallery a", {
        groupAll: true,
    });

    return (
        <div className="product__gallery">
            <div id="gallery">
                <a href={product.cardImage1} data-caption={product.title}>
                    <img className="product__gallery-card" src={product.cardImage1} alt={product.title} />
                </a>
                <a href={product.cardImage2} data-caption={product.title}>
                    <img className="product__gallery-card" src={product.cardImage2} alt={product.title} />
                </a>
                <a href={product.cardImage3} data-caption={product.title}>
                    <img className="product__gallery-card" src={product.cardImage3} alt={product.title} />
                </a>
                <a href={product.cardImage4} data-caption={product.title}>
                    <img className="product__gallery-card" src={product.cardImage4} alt={product.title} />
                </a>
            </div>
        </div>
    );
};

export default ProductImageCards;