import React from 'react';
import { Row,Col } from 'antd'
import Build from './Build'
import Info from './Infomation'
const index = (props) => {
    return (
        <div>
            <div className="root_build1">
                <Row>
                    <Col lg={16}>
                        <Build setStepPageCurrent={props.setStepPageCurrent} stepPageCurrent={props.stepPageCurrent}/>
                    </Col>
                    <Col lg={8}><Info/></Col>

                </Row>
            </div>
        </div>
    );
};

export default index;