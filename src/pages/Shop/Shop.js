import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import './Shop.css';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../hooks/useTitle';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';
import Loading from '../Shared/Loading/Loading';

const Shop = () => {
    useTitle('Shop');
    const [cart, setCart] = useCart();
    const { productCount } = useLoaderData();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);

    const totalPages = Math.ceil(productCount / size);
    const pageNumbers = [...Array(totalPages).keys()];

    const options = [3, 4, 5, 6, 7, 8, 9, 12];
    const handleSelectChange = (event) => {
        setSize(parseInt(event.target.value));
        setPage(0);
    };

    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['product', page, size],
        queryFn: async () => {
            const res = await fetch(`https://ema-john-server-mauve.vercel.app/product?page=${page}&size=${size}`)
            const data = await res.json()
            return data;
        }
    })

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
        toast.success('Added successfully');
        addToDb(selectedProduct._id);
    };

    const handleDeleteFormCart = () => {
        setCart([]);
        deleteShoppingCart();
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div className='shop-container'>
            <div>
                <div className='products-container'>
                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        pageNumbers.map(number => <button
                            onClick={() => setPage(number)}
                            className={page === number ? 'selected' : ''}
                            key={number}
                        >{number + 1}</button>)
                    }
                    <select
                        value={size}
                        onChange={handleSelectChange}
                    >
                        {
                            options.map(option => <option
                                key={option}
                                value={option}
                            >{option}</option>)
                        }
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