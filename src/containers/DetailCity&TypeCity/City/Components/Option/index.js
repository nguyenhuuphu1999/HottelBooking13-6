import { Button } from 'antd';
import React from 'react';
import './style.scss'
const index = (props) => {
    const {vistory,city} =props
    return (
        <div className="rootOption">
            <div className="option">
                <div><Button>Loại nơi ở</Button></div>
                <div><Button>Giá</Button></div>
                <div><Button>Đặt ngay</Button></div>
            </div>
            <div className="vote">
                <div><img src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"/></div>
                <div> <b>Hơn {vistory} khách đã ở tại {city}</b> </div>
                <div>Trung bình họ xếp hạng chỗ ở của mình ở mức 4.8/5 sao.</div>
            </div>
        </div>
    );
};

export default index;