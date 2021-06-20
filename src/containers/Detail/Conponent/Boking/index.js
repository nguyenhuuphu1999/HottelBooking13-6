import React from "react";
import './style.scss';
import { DatePicker, Button } from 'antd';
import moment from 'moment';
import {  Link } from "react-router-dom";
const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const index = () => {
  return (
    <div>
      <div className="booking_root">
        <div className="info_booking">
          <div>
            <b>200</b>
          </div>
          <div>
            <b>⭐ 4,16</b>
          </div>
        </div>
        <div>
            <div className="title_booking">
                <div className="title1">
                    <b>Nhận phòng</b>
                </div>

                <div className="title2">
                    <b>Trả phòng</b>
                </div>
            </div>
            <div className="date_booking">
                <div className="date">
                    <RangePicker
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format={dateFormat}
                    />
                </div>
            </div>
            <div className="btn_booking">
                <div>
                    <Link to="/booking">
                        <Button type="primary" ghost >
                            Đặt Phòng   
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
