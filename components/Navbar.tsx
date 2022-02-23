import Image from "next/image";
import React from "react";
import navbarStyles from "../styles/components/Navbar.module.css";
import HomeIcon from "@mui/icons-material/HomeRounded";
import ProfileIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.home_link}>
        <div className={navbarStyles.home}>
          <HomeIcon className={navbarStyles.icons} />
          <p>HOME</p>
        </div>
      </div>
      <div className={navbarStyles.logo}>
        <Image src={"/images/logo.png"} height={75} width={175} />
      </div>
      <div className={navbarStyles.profile_link}>
        <div className={navbarStyles.profile}>
          <p>PROFILE</p>
          <ProfileIcon className={navbarStyles.icons} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
