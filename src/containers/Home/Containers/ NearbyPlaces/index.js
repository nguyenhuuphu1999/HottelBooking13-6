import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
import '../style.scss'

const index = () => {
  const Data = [
    {
      image:
        "https://a0.muscache.com/im/pictures/f7736f4a-f8b9-4527-b46c-d0d8df856984.jpg?im_q=medq&im_w=720",
      city: "Thành phố Hồ Chí Minh",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720",
      city: "Nha Trang",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/f7736f4a-f8b9-4527-b46c-d0d8df856984.jpg?im_q=medq&im_w=720",
      city: "Thành phố Hồ Chí Minh",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720",
      city: "Nha Trang",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/f7736f4a-f8b9-4527-b46c-d0d8df856984.jpg?im_q=medq&im_w=720",
      city: "Thành phố Hồ Chí Minh",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720",
      city: "Nha Trang",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/f7736f4a-f8b9-4527-b46c-d0d8df856984.jpg?im_q=medq&im_w=720",
      city: "Thành phố Hồ Chí Minh",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720",
      city: "Nha Trang",
    },
  ];
  return (
    <div>
      <h1 className="rootTitleItem">Khám phá những điểm đến gần đây</h1>
      <div>
        <Row>
          {Data.map((item) => (
            <Col lg={6} >
              <Link to="/">
                <div className="nearByPlance">
                  <div className="img">
                    <img src={item.image} />
                  </div>
                  <div className="text">
                    <div className="title">{item.city}</div>
                    <div className="drive">15 phút lái xe</div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default index;
