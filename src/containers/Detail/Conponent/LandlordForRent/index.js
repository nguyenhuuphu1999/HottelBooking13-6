import React from "react";
import { Row, Col } from "antd";
import DatePicker from "react-datepicker";
import { useState } from "react";
import './style.scss'
import { Button } from "antd/lib/radio";
const index = () => {
  // const [startDate,setStartDate] = useState('')
  const data=[
    {
      title:"Trong thời gian ở",
      content:'Chúng tôi tôn trọng quyền riêng tư của khách, nhưng luôn sẵn sàng hỗ trợ nếu bạn cần sự giúp đỡ vì chúng tôi sống trong cơ sở. Tôi thậm chí có thể đi chơi và ăn một món ăn nhẹ ngon miệng của địa phương nếu tôi rảnh rỗi. Treo lên…'
    },
    {
      title:"Trong thời gian ở",
      content:'Chúng tôi tôn trọng quyền riêng tư của khách, nhưng luôn sẵn sàng hỗ trợ nếu bạn cần sự giúp đỡ vì chúng tôi sống trong cơ sở. Tôi thậm chí có thể đi chơi và ăn một món ăn nhẹ ngon miệng của địa phương nếu tôi rảnh rỗi. Treo lên…'
    },
    {
      title:"Trong thời gian ở",
      content:'Chúng tôi tôn trọng quyền riêng tư của khách, nhưng luôn sẵn sàng hỗ trợ nếu bạn cần sự giúp đỡ vì chúng tôi sống trong cơ sở. Tôi thậm chí có thể đi chơi và ăn một món ăn nhẹ ngon miệng của địa phương nếu tôi rảnh rỗi. Treo lên…'
    },
  ]
  return (
    <div className="infoRoot">
      <div>
        <div>
          <Row>
            <Col lg={18}>
              <div>
                <div className="infoForRent">
                  <Row>
                    <Col lg={3}><img src="https://a0.muscache.com/im/pictures/user/6351fe4f-00ce-45c8-a7be-f88c004ccfe3.jpg?im_w=240"/></Col>
                    <Col lg={21}>
                     <div style={{ display:"flex" ,justifyContent:"space-between" }}>
                      <div >
                          <h1 className="name">Chủ nhà Phuong</h1>
                          <div className="active">Đã tham gia vào tháng 11 năm 2018</div>
                        </div>
                        <div>
                          <Button className="btnContactForRent">
                            Liên hệ với chủ nhà
                          </Button>
                        </div>
                     </div>
                    </Col>
                  </Row>
                  <Row>
                   {
                     (typeof data != 'undefined' && data != null)?data.map(item =>
                      <Col lg={12}>
                        <div className="flex">
                          <div> <h2>{item.title}</h2> </div>
                          <div><p>{item.content} </p></div>
                        </div>
                      </Col>):<></>
                   }
                   
                  </Row>
                </div>
                <div>

                </div>
              </div>
            </Col>
            <Col lg={6}>
            
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default index;
