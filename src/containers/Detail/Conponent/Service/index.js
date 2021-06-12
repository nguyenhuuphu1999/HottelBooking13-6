import React from "react";
import { Row, Col } from "antd";
import { AiOutlineHome } from 'react-icons/ai';
import { GiNuclear } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import './style.scss'

const index = () => {
    const data=[
        {
            icon:<GiNuclear className="icon"/>,
            title:'Vệ sinh tăng cường',
            content:'Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Gobooking'
        },
        {
            icon:<AiOutlineHome className="icon"/>,
            title:'Toàn bộ nhà',
            content:'Bạn sẽ có căn hộ dịch vụ cho riêng mình.'
        },
        {
            icon:<BiWifi className="icon"/>,
            title:'Tiện nghi cho cuộc sống hàng ngày',
            content:'Chủ nhà đã trang bị chỗ ở này để cho thuê dài hạn – có sẵn nhà bếp, Wi-fi, chỗ đỗ xe miễn phí và điều hòa không khí.'
        },
        {
            icon:<AiOutlineCalendar className="icon"/>,
            title:'Miễn phí hủy trong 48 giờ',
            content:''
        }
    ]
  return (
    <div>
      <Row>
        <Col lg={18}>
          <div>
            <div>
                <div>
                    <h1>Toàn bộ căn hộ dịch vụ. Chủ nhà Mua</h1>
                </div>
                <div>
                    <p>2 khách · Phòng studio · 1 giường · 1 phòng tắm</p>
                </div>
                <hr width="100%"/>
            </div>
            <div className="service">
                <Row>
                   {
                     (typeof data != 'undefined'?  data.map(item=>
                        <>
                         <Col lg={1}>
                        <div className="serviceIcon">
                            {item.icon}
                        </div>
                    </Col>
                    <Col lg={23}>
                    <div>
                            <div className="titleService">
                                {item.title}
                            </div>
                            <div className="contentService">
                              {item.content}
                            </div>
                    </div>
                    </Col>
                        </>):<></>)
                   }
                </Row>
            </div>
          </div>
        </Col>
        <Col lg={6}></Col>
      </Row>
    </div>
  );
};

export default index;
