import React from 'react';
import Header from './Components/Header'
import Option from './Components/Option/index'
import Item from './Components/Items'
const index = () => {
    return (
        <div>
            <div>
                <Header countNumber="300" city="Hồ Chí Minh"/>
            </div>
            <div>
                <Option vistory="120.000" city="Hồ Chí Minh" />
            </div>
            <div>
                <Item/>
            </div>
        </div>
    );
};

export default index;