import React from "react";
import { Menu, Dropdown } from "antd";
import "./style.scss";
import Logo from "../../../Assets/Image/go-logo.png";

const menu = (
  <Menu style={{ top: "22px", width: "300px", marginLeft: "-30px",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Menu.Item style={{ fontSize: "18px", padding: "10px 10px",width:"100%",borderBottom:"1px dashed #848484" }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
       Khách Sạn
      </a>
    </Menu.Item>
    <Menu.Item style={{ fontSize: "18px", padding: "10px 10px",width:"100%",borderBottom:"1px dashed #848484" }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Khách Sạn
      </a>
    </Menu.Item>
  </Menu>
);

const MenuOption = (props) => {
  return (
    <div>
      <div className="mobile">
        <Dropdown overlay={menu }>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img src={Logo} />
          </a>
        </Dropdown>
      </div>

      <div className="desktop">
        <Dropdown overlay={props.isMobile == true ? menu : ""}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img src={Logo} />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default MenuOption;
