import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const { product, handleAddToCart } = props;

    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>Name: {name}</p>
                <p>Price:${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;