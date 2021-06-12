import React from "react";
import { Row, Col } from "antd";
import "./Style.scss";
import "../style.scss";
const index = () => {
  const data = [
    {
      image:
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
      title: "Nơi nghỉ dưỡng ngoài trời",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
      title: "Nơi nghỉ dưỡng ngoài trời",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
      title: "Nơi nghỉ dưỡng ngoài trời",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
      title: "Nơi nghỉ dưỡng ngoài trời",
    },
  ];
  return (
    <div>
      <h1 className="rootTitleItem">Ở bất cứ đâu</h1>
      <div>
        <Row>
          {data.map((item) => (
            <Col lg={6}>
              <div className="WhereNearItem">
                <div>
                  <img src={item.image} />
                </div>
                <div>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default index;
