import { faArrowRight, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from "react-router-dom";
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import shop from '../../images/shop.gif';
import './Order.css';

const Order = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='order-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <div className='shop-image'>
                        <img src={shop} alt="" />
                    </div>
                }
            </div>
            <div className='order-cart-container'>
                <Cart cart={cart}>
                    <button className='shop-now-btn' onClick={() => navigate('/shop')}>
                        <span className='btn-title'>Shop Now</span>
                        <FontAwesomeIcon className='btn-icon' icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                    {
                        cart.length > 0 && <button
                            className='checkout-btn'
                            onClick={() => navigate('/checkout')}
                        >
                            <span className='btn-title'>Proceed Checkout</span>
                            <FontAwesomeIcon className='btn-icon' icon={faMoneyCheck}></FontAwesomeIcon>
                        </button>
                    }
                </Cart>
            </div>
        </div>
    );
};

export default Order;