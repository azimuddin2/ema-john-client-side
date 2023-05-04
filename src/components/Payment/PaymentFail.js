import React from 'react';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <div className='payment-fail'>
            <MdDoNotDisturbAlt className='fail-icon'></MdDoNotDisturbAlt>
            <h1 className='error'>Something Went wrong!</h1>
            <h2 className='pay-again'>Please Pay Try Again.</h2>
            <Link to='/order'>
                <button>Shop Now</button>
            </Link>
        </div>
    );
};

export default PaymentFail;