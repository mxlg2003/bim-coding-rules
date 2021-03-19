import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import * as MenuData from "../utils/menu";

const { SubMenu } = Menu;


const SystemMenu = () => {

  return (
    <Menu
      // onClick={handleClick}
      // selectedKeys={[window.location.pathname]}
      openKeys={["/zones"]}
      mode="inline"
      className="menu-container"
      style={{border:0}}
    >
      {MenuData.MENU.map((item) => {
        if (item.SubItems) {
          return (
            <SubMenu
              key={item.Url || "/"}
              title={
                <span>
                  <span>{item.ItemName}</span>
                </span>
              }
            >
              {item.SubItems.map((item) => {
                return (
                  <Menu.Item key={item.Url}>
                    <NavLink to={item.Url || "/"}>
                      {item.ItemName}
                    </NavLink>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.Url}>
            <NavLink to={item.Url || "/"}>
              {item.ItemName}
            </NavLink>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default SystemMenu;
