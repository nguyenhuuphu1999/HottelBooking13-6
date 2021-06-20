import React from "react";
import { Form, Input, Button, Checkbox, Select } from "antd";
import "./style.scss";
const { Option } = Select;
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const index = (props) => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} >
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

   const onFinishBuild1 = (values: any) => {
         props.setStepPageCurrent(props.stepPageCurrent+1)
        console.log('Success:', values);
    };

    const onFinishFailedBuild1 = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


  return (
    <div>
      <div className="form_info_booking">
        <div>
          <b> Vui lòng điền thông tin của bạn. </b>
        </div>
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinishBuild1}
            onFinishFailed={onFinishFailedBuild1}
          >
            <Form.Item
              label="Họ tên như trên hộ chiếu"
              name="fullName"
              rules={[
                { required: true, message: "Trường này không được bỏ trống!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Trường này không được bỏ trống!" },
                {
                  required: true,
                  type: "email",
                  message: "Email không hợp lệ!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại Email"
              dependencies={["email"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Email không hợp lệ!!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("email") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Email Không khớp!"));
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                Tôi không ở phòng nào tại khách sạn này. Tôi đặt phòng giúp cho
                người khác.
              </Checkbox>
            </Form.Item>

            <div>
              <div>
                <b>Hãy cho chúng tôi biết quý khách cần gì.</b>
                <p>
                  Chúng tôi sẽ báo cho khách sạn hoặc chủ nhà ngay sau khi bạn
                  đặt phòng!
                </p>
              </div>
              <div>
                <div>
                  <div className="root_form_info_booking">
                    <div>
                      <b>Quy định hút thuốc (nếu có phòng):</b>
                    </div>
                    <div className="regulations_room">
                      <Form.Item name="no_smoking" valuePropName="checked">
                        <Checkbox>
                          <svg
                            width="1em"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="sc-AxmLO kXfNpL"
                          >
                            <path d="M16.027 14.039v-1.978h-3.316l-2.007 1.978h5.323zm1 0h.95v-1.978h-.95v1.978zm-3.301-2.978h4.75a.5.5 0 0 1 .5.5v2.978a.5.5 0 0 1-.5.5H9.69l-4.063 4.005A9.465 9.465 0 0 0 12 21.5a9.5 9.5 0 0 0 9.5-9.5 9.464 9.464 0 0 0-2.364-6.272l-5.41 5.333zm-1.425 0l6.136-6.048A9.466 9.466 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12c0 2.434.915 4.654 2.42 6.335l3.345-3.296H5.5a.5.5 0 0 1-.5-.5v-2.978a.5.5 0 0 1 .5-.5h6.801zm-1.015 1H6v1.978h3.28l2.006-1.978zM12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zM6.122 5.647a.5.5 0 0 1 .709.706c-.443.444-.443.788.007 1.26.824.865.824 1.81-.024 2.585a.5.5 0 1 1-.675-.739c.422-.385.422-.687-.025-1.156-.82-.861-.82-1.823.008-2.656z"></path>
                          </svg>
                          Phòng không hút thuốc.
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="room_a_bed" valuePropName="checked">
                        <Checkbox>
                          <svg
                            width="1em"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="sc-AxmLO kXfNpL"
                          >
                            <path d="M16.027 14.039v-1.978H6v1.978h10.027zm1 0h.95v-1.978h-.95v1.978zM12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zM5.5 11.06h12.977a.5.5 0 0 1 .5.5v2.979a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1-.5-.5v-2.978a.5.5 0 0 1 .5-.5zm.622-5.413a.5.5 0 0 1 .709.706c-.443.444-.443.788.007 1.26.824.865.824 1.81-.024 2.585a.5.5 0 1 1-.675-.739c.422-.385.422-.687-.025-1.156-.82-.861-.82-1.823.008-2.656z"></path>
                          </svg>
                          Tôi muốn lấy giường lớn.
                        </Checkbox>
                      </Form.Item>
                    </div>
                    <div>
                      <b>Quy định hút thuốc (nếu có phòng):</b>
                    </div>
                    <div className="regulations_room">
                      <Form.Item name="smoking" valuePropName="checked">
                        <Checkbox>
                          <svg
                            width="1em"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="sc-AxmLO kXfNpL"
                          >
                            <path d="M3.715 13.96h16.606L19.216 6.43h-.897l.12.36a.88.88 0 0 1-.834 1.157h-4.253a.88.88 0 0 1-.835-1.156l.12-.361h-1.145l.12.36a.88.88 0 0 1-.835 1.157H6.525a.88.88 0 0 1-.836-1.156l.12-.361h-.906l-1.188 7.528zm-.157 1l-.473 2.993h17.822l-.44-2.994H3.558zm-1.462 2.844l1.88-11.916.05-3.237c0-.904.734-1.638 1.638-1.638h12.784a1.64 1.64 0 0 1 1.638 1.646L20.04 5.62c.053.067.09.149.103.238l1.75 11.92c.059.082.094.184.093.294l-.002.335a.5.5 0 0 1 0 .1l-.018 2.84c0 .904-.734 1.638-1.638 1.638H3.638A1.639 1.639 0 0 1 2 21.344l.017-2.76a.498.498 0 0 1-.01-.208l.012-.083.002-.227c0-.096.028-.186.075-.262zm.919 1.15L3 21.346c0 .352.286.638.638.638h16.69a.639.639 0 0 0 .638-.641l.015-2.39H3.015zM4.984 5.43h1.155l.138-.416a.5.5 0 0 1 .475-.343h3.52a.88.88 0 0 1 .834.602l.052.157h1.81l.137-.416a.5.5 0 0 1 .474-.343h3.52a.88.88 0 0 1 .834.602l.053.157h1.057l.043-2.78a.638.638 0 0 0-.638-.638H5.664a.64.64 0 0 0-.638.646L4.984 5.43zm12.028.241h-3.071l-.423 1.276h3.92l-.426-1.276zm-6.828 0H7.113L6.69 6.948h3.919l-.426-1.276z"></path>
                          </svg>
                          Phòng hút thuốc.
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="room_two_bed" valuePropName="checked">
                        <Checkbox>
                          <svg
                            width="1em"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="sc-AxmLO kXfNpL"
                          >
                            <path d="M11.354 17.748a.611.611 0 0 1 .006.089v4.672c0 .667-1 .667-1 0v-.575a1.498 1.498 0 0 1-.5.086H2.515c-.175 0-.344-.03-.5-.086v.575c0 .667-1 .667-1 0V18.59v-.198l.001-.042a.504.504 0 0 1 0-.077L1.716 7.25c0-.213.053-.414.147-.59a.498.498 0 0 1-.058-.235V2.287c0-.69.56-1.25 1.25-1.25h6.496c.69 0 1.25.56 1.25 1.25v4.34c0 .061-.01.12-.031.174.05.133.079.276.078.425l.505 10.522zm-.994 2.789V18.59a.5.5 0 0 0-.5-.5H2.5a.5.5 0 0 0-.486.474v1.956a.5.5 0 0 0 .5.5H9.86a.5.5 0 0 0 .5-.483zM2.088 17.15a1.5 1.5 0 0 1 .425-.061H9.86c.162 0 .318.026.465.074L9.85 7.25A.25.25 0 0 0 9.6 7H8.531A1.5 1.5 0 0 1 7.1 8.05H5.35A1.5 1.5 0 0 1 3.919 7h-.952c-.139 0-.25.112-.251.282l-.628 9.87zM7.6 6.551a.506.506 0 0 1 0-.101V6.3a.5.5 0 0 0-.5-.5H5.35a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5H7.1a.5.5 0 0 0 .5-.5zM8.57 6H9.6c.069 0 .136.006.202.016V2.287a.25.25 0 0 0-.25-.25H3.056a.25.25 0 0 0-.25.25V6.01c.052-.007.106-.01.16-.01h.914a1.5 1.5 0 0 1 1.47-1.2H7.1A1.5 1.5 0 0 1 8.57 6zm14.384 11.748a.611.611 0 0 1 .006.089v4.672c0 .667-1 .667-1 0v-.575a1.498 1.498 0 0 1-.5.086h-7.346c-.175 0-.344-.03-.5-.086v.575c0 .667-1 .667-1 0V18.59v-.198l.001-.042a.504.504 0 0 1 0-.077l.702-11.023c0-.213.053-.414.147-.59a.498.498 0 0 1-.058-.235V2.287c0-.69.56-1.25 1.25-1.25h6.496c.69 0 1.25.56 1.25 1.25v4.34c0 .061-.01.12-.031.174.05.133.079.276.078.425l.505 10.522zm-.994 2.789V18.59a.5.5 0 0 0-.5-.5H14.1a.5.5 0 0 0-.486.474v1.956a.5.5 0 0 0 .5.5h7.347a.5.5 0 0 0 .5-.483zm-8.272-3.386a1.5 1.5 0 0 1 .425-.061h7.347c.162 0 .318.026.465.074L21.45 7.25A.25.25 0 0 0 21.2 7h-1.069A1.5 1.5 0 0 1 18.7 8.05h-1.75A1.5 1.5 0 0 1 15.519 7h-.952c-.139 0-.25.112-.251.282l-.628 9.87zm5.512-10.6a.506.506 0 0 1 0-.101V6.3a.5.5 0 0 0-.5-.5h-1.75a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5h1.75a.5.5 0 0 0 .5-.5zM20.17 6h1.03c.069 0 .136.006.202.016V2.287a.25.25 0 0 0-.25-.25h-6.496a.25.25 0 0 0-.25.25V6.01c.052-.007.106-.01.16-.01h.914a1.5 1.5 0 0 1 1.47-1.2h1.75A1.5 1.5 0 0 1 20.17 6z"></path>
                          </svg>
                          Tôi muốn lấy phòng 2 giường.
                        </Checkbox>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Form.Item>
                <div style={{ padding:"30px 0px 0px 0px", position:"absolute" ,bottom:"-24px", right:"30px" }}>
                    <Button type="primary" htmlType="submit"> Tiếp tục </Button>
                </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default index;
