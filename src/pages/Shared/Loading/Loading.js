import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div style={{ margin: '200px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#FF9900"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;