import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <p
            style={{ color: 'red', textAlign: 'center', margin: '80px 0px' }}
        >
            {message}
        </p>
    );
};

export default ErrorMessage;