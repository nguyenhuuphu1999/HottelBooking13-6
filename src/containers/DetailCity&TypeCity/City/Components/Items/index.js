import React from "react";
import "./style.scss";
import { Row, Col, Rate } from "antd";
import "./style.scss";
const index = () => {
  const data = [
    {
      image:
        "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
      name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
      ratings: "4,82",
      price: 500000,
      option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
      name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
      ratings: "4,82",
      price: 500000,
      option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
      name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
      ratings: "4,82",
      price: 500000,
      option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
      name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
      ratings: "4,82",
      price: 500000,
      option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
      name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
      ratings: "4,82",
      price: 500000,
      option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
      name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
      ratings: "4,82",
      price: 500000,
      option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
    },
    {
        image:
          "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
        name: "PRIVATE BALCONY  Local Neighborhood ❤ of city 2",
        ratings: "4,82",
        price: 500000,
        option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
      },
      {
        image:
          "https://a0.muscache.com/im/pictures/44acf62b-d859-45e5-9315-c222c866ed4c.jpg?im_w=480 ",
        name: "PRIVATE BALCONY ⭐ Local Neighborhood ❤ of city 2",
        ratings: "4,82",
        price: 500000,
        option: "3 khách , Phòng studio, 1 giường,1 phòng tắm",
      },
  ];
  return (
    <div>
      <div>
        <Row>
          {data.map((item) => (
            <Col lg={6}>
              <div className="descrpitionItemCity">
                <div>
                  <div className="img">
                    <img src={item.image} />
                  </div>
                </div>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <hr width="10%" style={{ float: "left" }} />
                  <br />
                  <div className="option">{item.option}</div>
                  <div className="flex">
                        <div>
                        <span className="price">
                            {item.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                            })}
                        </span>
                        /đêm
                        </div>
                        <div className="rating">⭐{item.ratings}</div>
                  </div>
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
