import React from "react";
import { Row, Col } from "antd";
import "./style.scss";
import BoCongThuong from "../../Assets/Image/featured-traveloka-removebg-preview.png";
import Aribnb from "../../Assets/Image/download.png";
import GoLogo from "../../Assets/Image/go-logo.png";

const index = () => {
  return (
    <div>
        <div className="certificate">
            <Row>
            <Col lg={8} xs={24}>
                {" "}
                <img src={BoCongThuong} />{" "}
            </Col>
            <Col lg={8} xs={24}>
                {" "}
                <img src={Aribnb} />{" "}
            </Col>
            <Col lg={8} xs={24}>
                {" "}
                <img src={GoLogo} />{" "}
            </Col>
            </Row>
            <hr />
        </div>
        <div className="option">
          <div className="item">
            <div>© 2021 GoBooking, Inc.</div>
            <div>Quyền riêng tư</div>
            <div>Điều khoản</div>
            <div>Sơ đồ trang web</div>
          </div>
          <div></div>
        </div>
    </div>
  );
};

export default index;
