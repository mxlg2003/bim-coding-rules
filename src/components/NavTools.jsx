import React from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const NavTools = () => {
  return (
    <Menu
      mode="inline"
      theme="dark"
      inlineCollapsed="true"
      className={"appMenu navTools"}
    >
      <SubMenu key="sub11" icon={<SlidersOutlined />} title="Navigation One">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub22"
        icon={<QuestionCircleOutlined />}
        title="Navigation Two"
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default NavTools;
