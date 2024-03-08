import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, price, ratings, seller } = product;

    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon className='btn-icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;