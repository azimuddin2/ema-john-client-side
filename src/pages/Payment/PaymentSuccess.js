import React, { useEffect, useState } from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');

    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://ema-john-server-mauve.vercel.app/order/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transactionId])

    if (!order?._id) {
        return (
            <div className='payment-fail'>
                <MdDoNotDisturbAlt className='fail-icon'></MdDoNotDisturbAlt>
                <h1 className='error'>No order found!</h1>
            </div>
        )
    };

    return (
        <div>
            <div className='payment-success'>
                <IoCheckmarkCircleSharp className='success-icon'></IoCheckmarkCircleSharp>
                <h1 className='congratulations'>congratulations!</h1>
                <p>Order Paid Successful</p>
                <p>TransactionId: {order.transactionId}</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;