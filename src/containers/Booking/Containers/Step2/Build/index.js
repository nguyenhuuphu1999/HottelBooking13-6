import React from "react";
import { Form, Row, Col, Select, Collapse, Radio, Button } from "antd";
import "./style.scss";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

const { Option } = Select;

const { Panel } = Collapse;
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = (props) => {
  const [value, setValue] = React.useState(1);
  const [valuePayment, setValuePayment] = React.useState(1);

  const onFinishBuild1 = (values: any) => {
    props.setStepPageCurrent(props.stepPageCurrent + 1);
    console.log("Success:", values);
  };

  const onFinishFailedBuild1 = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangePayment = (e) => {
    console.log("radio checked", e.target.value);
    setValuePayment(e.target.value);
  };

  const callback = (key) => {
    console.log(key);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const thanh_toan_dien_tu = (
    <div>
      <Radio.Group
        style={{ display: "flex", flexDirection: "column" }}
        value={value}
        onChange={onChange}
      >
        <Radio value={1}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  width="75px"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1458245625/pwegh6kadcb37kuz0woj.png"
                />
              </div>
              <div>MOMO</div>
            </div>
          </div>
        </Radio>
        <Radio value={2}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                <img width="75px" src="https://pay.vnpay.vn/images/logo.png" />
              </div>
              <div>VNPAY</div>
            </div>
          </div>
        </Radio>
      </Radio.Group>
    </div>
  );

  const thanh_toan_tai_quay = (
    <div>
      <div>Bạn có thể lựa chọn cái địa điểm sau để thanh toán</div>
      <Radio.Group
        style={{ display: "flex", flexDirection: "column" }}
        value={valuePayment}
        onChange={onChangePayment}
      >
        <Radio value={1}>
          <GoLocation />
          149C Lò Đức Quận Hai Bà Trưng Hà Nội.
        </Radio>
        <Radio value={2}>
          <GoLocation /> 243 Lý Tự Trọng, P. Bến Thành, Q.1, Hồ Chí Minh, Việt
          Nam
        </Radio>
        <Radio value={3}>
          <GoLocation /> A3-01-01 Era Town, Đường D1, P. Phú Mỹ, Q.7, Hồ Chí
          Minh, Việt Nam
        </Radio>
      </Radio.Group>
    </div>
  );

  const thanh_toan_vi_go = (
    <>
      <Radio value={1}>
        Thanh toán qua GO.
      </Radio>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "20px",
          color: "#5392f9",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>SỐ DƯ CỦA BẠN</div>
          <div>7000.0000 đ</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>SỐ TIỀN PHẢI THANH TOÁN</div>
          <div>7000.0000 đ</div>
        </div>
      </div>
    </>
  );

  const onFinishBuild2 = (values: any) => {
    props.setStepPageCurrent(props.stepPageCurrent + 1);
    console.log("Success:", values);
  };

  const onFinishFailedBuild2 = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="step2Root">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinishBuild2}
          onFinishFailed={onFinishFailedBuild2}
        >
          <div className="titlePayment">
            <Row>
              <Col lg={8}>
                <div className="titlePayment1">
                  <RiSecurePaymentLine />
                  Thanh toán an toàn
                </div>
              </Col>
              <Col lg={16}>
                <div className="titlePayment2">
                  Tất cả thông tin thẻ đều được mã hóa, được bảo vệ và đảm bảo
                  an toàn.
                </div>
              </Col>
            </Row>
          </div>
          <div className="payment">
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              <Panel header="THANH TOÁN ĐIỆN TỬ" key="1">
                <div className="contentPayment">{thanh_toan_dien_tu}</div>
              </Panel>

              <Panel header="THANH TOÁN VÍ GO" key="2">
                <p>{thanh_toan_vi_go}</p>
              </Panel>

              <Panel header="THANH TOÁN TAI QUẦY" key="3">
                <p>{thanh_toan_tai_quay}</p>
              </Panel>
            </Collapse>
          </div>
         <Form.Item>
          <div style={{ textAlign:"center", fontSize:"16px", fontWeight:"600" ,marginTop:"30px"}}>Bằng cách tiếp tục, tôi đồng ý với Điều Khoản Sử Dụng của Agoda và thừa nhận chính sách bảo mật của họ.</div>
          
          </Form.Item>
          <Form.Item>
           
            <div
              style={{
                padding: "5px",
                position: "absolute",
                bottom: "-24px",
                right: "30px",
              }}
            >
            
              <Button type="primary" htmlType="submit">
                {" "}
                Tiếp tục{" "}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Index;

{
  /* <Radio.Group onChange={onChange} value={value}>
                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                        
                            <div className="item">
                                <Radio  value={1}>
                                    <Panel header="THANH TOÁN ĐIỆN TỬ" key="1">
                                        <p>{text}</p>
                                    </Panel>
                                </Radio>
                            </div>
                            <div className="item">
                                <Radio  value={2}>
                                    <Panel header="THANH TOÁN VÍ GO" key="2">
                                        <p>{text}</p>
                                    </Panel>
                                </Radio>
                            </div>
                            <div className="item">
                                <Radio value={3}>
                                    <Panel header="THANH TOÁN TAI QUẦY" key="3">
                                         <p>{text}</p>
                                    </Panel>
                                </Radio>
                            </div>
                        
                    </Collapse>    
                    </Radio.Group> */
}
