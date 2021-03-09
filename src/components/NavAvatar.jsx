import React from "react";
import { Avatar, Image, Menu, Button  } from 'antd';

const { SubMenu } = Menu;

const NavAvatar = () => {

    return (
        <Menu
      mode="inline"
      theme="dark"
      inlineCollapsed="true"
      className={"appMenu navTools"}
    >
      <SubMenu key="sub11"  title="Navigation One">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </Menu>
    );
  };
  
  export default NavAvatar;