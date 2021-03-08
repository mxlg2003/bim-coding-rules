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
} from "@ant-design/icons";


const AppMenu = () => {
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed="true"
      className={"appMenu"}
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" icon={<ContainerOutlined />}>
        Option 3
      </Menu.Item>
      <Menu.Item key="sub1" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="sub2" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
