import React from "react";
import Image from "./Conponent/Image";
import Service from "./Conponent/Service";
import { Col, Row } from "antd";
import Boking from './Conponent/Boking'
import './style.scss';

const index = () => {
  return (
    <div>
      <div>
        <Image />
      </div>
      <Row >
        <Col lg={18}>
          <div>
            <Service />
          </div>
        </Col>
        <Col lg={6}>
          <div class="index_booking">
            <Boking/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
