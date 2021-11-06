import React from "react";
import { Layout } from "antd";
import "./Layout.scss";

const { Footer } = Layout;

interface AppFooterProps {
  children: React.ReactNode;
}

const AppFooter: React.FC<AppFooterProps> = ({ children }) => (
  <Footer className="footer app-footer">{children}</Footer>
);

export default AppFooter;
