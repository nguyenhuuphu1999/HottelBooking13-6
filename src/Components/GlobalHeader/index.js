import React from "react";
import { Row, Col } from "antd";
import "./stylec.scss";
import MenuProfile from "./Components/MenuProfile";
import MenuOption from "./Components/MenuOption";
const Header = () => {
  return (
    <div>
      <div className="menuRoot">
        <Row>
          <Col lg={2} xs={20}className="menuLeft">
              <MenuOption />
          </Col>
          <Col lg={20} xs={0}  className="menuCenter">
            <div className="menuOptionCenter">
              <div className="menuOptionCenterChild">
                <div>Khách sạn</div>
                <div>Khách sạn</div>
                <div>Khách sạn</div>
              </div>
            </div>
          </Col>
          <Col lg={2} xs={2} className="menuRight">
              <MenuProfile isLogin={true}/>
          </Col>
        </Row>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
