import { Button } from "antd";
import React from "react";
import "./style.scss";
import {Link} from 'react-router-dom'
const index = () => {
  return (
    <div>
        <div className="beautifulNature">
            <picture>
                <source
                    srcSet="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440 1x, https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=2560 2x"
                    media="(min-width: 1440px)"
                />
            <img src="https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_q=medq&im_w=720" />
            </picture>
            <div className="beautifulNatureContent">
                <div>
                    <h1 className="beautifulNatureContentTitle">Thiên nhiên tươi đẹp</h1>
                </div>
                <div>
                    <p>Danh sách Yêu thích do GoBooking tuyển chọn.</p>
                </div>
                <div>
                   <Link to="/"> <Button>Lấy cảm hứng</Button></Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default index;
