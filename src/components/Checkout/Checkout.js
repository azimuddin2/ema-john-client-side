import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import './Checkout.css';

const Checkout = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='form-container'>
            <form>
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
                        type="text"
                        defaultValue={user?.email || ''}
                        placeholder='Your Name'
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
                        placeholder='Your Post Code'
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Your Address'
                        required
                    />
                </div>
                <input className='pay-btn' type="submit" value="PAY" />
            </form>
        </div>
    );
};

export default Checkout;