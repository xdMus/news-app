import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";

import "./Layout.scss";

const { Header } = Layout;

const AppHeader = () => {
  const history = useHistory();
  const location = useLocation();

  const redirectToHomePage = () => {
    history.push("/");
  };

  const redirectToManagePage = () => {
    history.push("/admin/create");
  };

  const calculateSelectedKey = () => {
    const path = location.pathname;

    switch (path) {
      case "/":
        return "1";
      case "/admin/create":
        return "2";
      default:
        return "1";
    }
  };

  return (
    <Header className="app-header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[calculateSelectedKey()]}
      >
        <Menu.Item key="1" onClick={redirectToHomePage}>
          Home
        </Menu.Item>

        <Menu.Item key="2" onClick={redirectToManagePage}>
          Manage
        </Menu.Item>

        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
