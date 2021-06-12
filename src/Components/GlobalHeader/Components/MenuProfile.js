import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import "./style.scss";

//  =================================== Menu  user chua login =========================//


const menuIsLogin = (
  <Menu style={{ top: "40px", width: "160px",marginRight:"-30px" }}>
   <Menu.Item style={{fontSize:"18px" ,padding:"10px 10px" ,borderBottom:"1px dashed #848484"}}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Đăng nhập
      </a>
    </Menu.Item>
    <Menu.Item style={{fontSize:"18px" ,padding:"10px 10px"}}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Đăng ký
      </a>
    </Menu.Item>
  </Menu>
);
//  =================================== Menu Khi user dang login =========================//
const menuLogin = (
    <Menu style={{ top: "40px", width: "160px", marginRight:"-30px" }}>
      <Menu.Item style={{fontSize:"18px" ,padding:"10px 10px" ,borderBottom:"1px dashed #848484"}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Trang cá nhân
        </a>
      </Menu.Item>
      <Menu.Item style={{fontSize:"18px" ,padding:"10px 10px" ,borderBottom:"1px dashed #848484"}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Ưu đãi của bạn
        </a>
      </Menu.Item>
      <Menu.Item style={{fontSize:"18px" ,padding:"10px 10px" ,borderBottom:"1px dashed #848484"}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Đăng xuất
        </a>
      </Menu.Item>
      <Menu.Item style={{fontSize:"18px" ,padding:"10px 10px"}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Trợ giúp
        </a>
      </Menu.Item>
    </Menu>
  );
//======================== render ================================//
const MenuMoble = (props) => {
   
  return (
    <div>
      <Dropdown overlay={props.isLogin == true ? menuLogin:menuIsLogin}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <CgProfile className="menuIconProfile" />
        </a>
      </Dropdown>
      ,
    </div>
  );
};

export default MenuMoble;
