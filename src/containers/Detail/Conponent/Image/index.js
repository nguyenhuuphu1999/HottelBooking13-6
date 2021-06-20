import React from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { Row,Col } from 'antd';
import './style.scss'

const index = () => {
    return (
        <div className="infoApartment">
         
            <div>
                <h1>♛ Blueming ♛ FREE NETFLIX 1br @central D3 ♛</h1>
            </div>

            <div className="infoApartment">
              
                <div>⭐<b>4,25</b></div>
                <div className="child2">🇻🇳 Chủ nhà siêu cấp</div>
                <div className="child3"><GrMapLocation/> Quận 3, Thành phố Hồ Chí Minh, Việt Nam </div>
              
           </div>

            <div className="image">
                <Row>
                    <Col lg={12} className="parent1"><img width="100%" height="100%" src="https://a0.muscache.com/im/pictures/578a7e62-e315-46cb-b1b2-fb5bf0d6b8ee.jpg?im_w=1200"/></Col>
                    <Col lg={12} className="parent2">
                        <Row>
                            <Col lg={12} ><img className="children1" width="100%" height="100%" src="https://a0.muscache.com/im/pictures/578a7e62-e315-46cb-b1b2-fb5bf0d6b8ee.jpg?im_w=1200"/></Col>
                            <Col lg={12} ><img className="children2" width="100%" height="100%" src="https://a0.muscache.com/im/pictures/578a7e62-e315-46cb-b1b2-fb5bf0d6b8ee.jpg?im_w=1200"/></Col>
                            <Col lg={12} ><img className="children3" width="100%" height="100%" src="https://a0.muscache.com/im/pictures/578a7e62-e315-46cb-b1b2-fb5bf0d6b8ee.jpg?im_w=1200"/></Col>
                            <Col lg={12} ><img className="children4" width="100%" height="100%" src="https://a0.muscache.com/im/pictures/578a7e62-e315-46cb-b1b2-fb5bf0d6b8ee.jpg?im_w=1200"/></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default index;