import React from "react";
import footerStyles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p>Copyright &copy; 2022 Om Londhe</p>
      &nbsp;
      <p>
        Developed with 🖤 by
        <strong> Om Londhe </strong>
      </p>
    </div>
  );
};

export default Footer;
