import React from "react";
import footerStyles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p>Copyright &copy; 2022 Scaler by InterviewBit</p>
      <p>
        Developed with 🖤 by
        <strong> Om Londhe </strong>
        at
        <strong> Scaler by InterviewBit</strong>
      </p>
    </div>
  );
};

export default Footer;
