import React from 'react';
import { useState, useEffect } from 'react';
import './style.scss'

const Index = (props) => {
    const {initialMinute = 59,initialSeconds = 60} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });


    return (
        <div className="step3Root">
            <div className="title">
                <div>
                    <p>Mã đơn hàng</p>
                    <p>212121221</p>
                </div>
                <div>   
                    <p>Số tiền</p>
                    <p>7.259.995 đ</p>
                </div>
            </div>

            <div className="build">
                
                <div className="logo">
                 
                        <img width="70%" src="https://www.payoo.vn/v2/img/merchants/vinmartplus.png"/>
                        <img width="70%" src="https://www.payoo.vn/v2/img/merchants/vinmartplus.png"/>
                        <img width="70%" src="https://www.payoo.vn/v2/img/merchants/vinmartplus.png"/>
                        <img width="70%" src="https://www.payoo.vn/v2/img/merchants/vinmartplus.png"/>
                        <img width="70%" src="https://www.payoo.vn/v2/img/merchants/vinmartplus.png"/>
                        
                </div>

                <div className="time">
                   Bạn có 1 tiếng để  hoàn tất thanh toán
                   <div>
                
                    { minutes === 0 && seconds === 0
                        ? null
                        : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
                    }
                </div>
                </div>
                
            
            </div>
        </div>
    );
};

export default Index;