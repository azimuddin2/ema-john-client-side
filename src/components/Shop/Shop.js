import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import useTitle from '../../hooks/useTitle';

const Shop = () => {
    useTitle('Shop');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, []);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    };

    const handleDeleteFormCart = () => {
        setCart([]);
        deleteShoppingCart();
    };

    return (
        <div className='shop-container'>
            <div >
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                >
                    <Link to='/order'>
                        <button className='order-btn'>
                            <span className='order-text'>Review Order</span>
                            <FontAwesomeIcon className='order-btn-icon' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                    <button
                        onClick={handleDeleteFormCart}
                        className="delete-cart-btn"
                    >
                        <span className='clear-btn-text'>Clear Cart</span>
                        <RiDeleteBin5Fill className='delete-btn-icon'></RiDeleteBin5Fill>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;