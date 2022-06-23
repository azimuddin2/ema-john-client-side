import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    // console.log(props)
    const {product, handleRemoveProduct} = props;
    const { img, name, price, shipping, quantity } = product;

    return (
        <div className='review-item-container'>
            <div className='review-image'>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <h2 className='review-title' title={name}>
                        {
                            name.length > 20 ? name.slice(0, 20) + '...' : name
                        }
                    </h2>
                    <p>Price: <span className='color-orange'>${price}</span></p>
                    <p>Shipping Charge: <span className='color-orange'>${shipping}</span></p>
                    <p>Quantity: <span className='color-orange'>{quantity}</span></p>
                </div>
                <div className='delete'>
                    <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;