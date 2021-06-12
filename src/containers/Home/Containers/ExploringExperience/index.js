import React from "react";
import { Row,Col } from "antd";
import './style.scss'

const index = () => {
    const data=[
        {
            image:"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480",
            title:"Trải nghiệm",
            shortDescrpition:"Những điều nên trải nghiệm của địa phương, dù bạn đang ở bất cứ đâu."
        },
        {
            image:"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480",
            title:"Trải nghiệm",
            shortDescrpition:"Những điều nên trải nghiệm của địa phương, dù bạn đang ở bất cứ đâu."
        },
        {
            image:"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480",
            title:"Trải nghiệm",
            shortDescrpition:"Những điều nên trải nghiệm của địa phương, dù bạn đang ở bất cứ đâu."
        }
    ]
  return (
    <div>
      <h1 className="rootTitleItem">Khám phá Trải nghiệm</h1>
      <div>
        <p className="rootDescrpitionItem">
          Các hoạt động độc đáo với các chuyên gia địa phương – tham gia trực
          tiếp hoặc trực tuyến.
        </p>
      </div>
      <div>
          <Row>
              {
                  data.map(item =>
                  <Col lg={8} xs={24}>
                    <div className="ExploringExperience">
                       <div className="flex"> <img src={item.image}/></div>
                        <div className="flex">
                            <div><h2>{item.title}</h2></div>
                            <div> <p>{item.shortDescrpition}</p></div>
                        </div>
                    </div>
                </Col>)
              }
          </Row>
      </div>
    </div>
  );
};

export default index;
