import React from "react";
import { Layout } from "antd";
import "./Layout.scss";

const { Content } = Layout;

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => (
  <Content className="site-layout app-content">
    <div className="site-layout-background app-background">{children}</div>
  </Content>
);

export default AppContent;
