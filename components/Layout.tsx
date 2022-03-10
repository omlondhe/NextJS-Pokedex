import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import layoutStyles from "../styles/components/Layout.module.css";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={layoutStyles.layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
