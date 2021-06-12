import React from 'react';
import './style.scss'
import '../../../style.scss'
const index = (props) => {
    const {countNumber,city} =props
    return (
        <div>
            <div className="countNumber"><p>Hơn {countNumber} chỗ ở.</p></div>
            <div className="city">
                <h1>Chỗ ở tại {city}.</h1>
            </div>
        </div>
    );
};

export default index;