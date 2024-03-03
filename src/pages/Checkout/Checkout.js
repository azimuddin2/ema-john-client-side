import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import payment from '../../images/payment.gif';
import './Checkout.css';
import useCart from '../../hooks/useCart';
import useTitle from '../../hooks/useTitle';

const Checkout = () => {
    useTitle('Checkout');
    const { user } = useContext(AuthContext);
    const [cart] = useCart();

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user?.email;
        const currency = form.currency.value;
        const postCode = form.postCode.value;
        const address = form.address.value;

        const checkoutInfo = {
            productPrice: grandTotal,
            name,
            phone,
            email,
            currency,
            postCode,
            address
        };

        fetch('https://ema-john-server-mauve.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkoutInfo)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url);
            })
            .catch(error => console.log(error));
    };

    return (
        <section className='checkout-container'>
            <div className='payment'>
                <img src={payment} alt="Payment" className='payment-img' />
            </div>
            <div className='checkout-form'>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Name'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="phone"
                            placeholder='Your Phone'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            defaultValue={user?.email || ''}
                            disabled
                        />
                    </div>
                    <div className='input-group'>
                        <select
                            defaultValue='BDT'
                            name='currency'
                            className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name='postCode'
                            placeholder='Your Post Code'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name='address'
                            placeholder='Your Address'
                            required
                        />
                    </div>
                    <input className='form-submit' type="submit" value="PAY" />
                </form>
            </div>
        </section>
    );
};

export default Checkout;