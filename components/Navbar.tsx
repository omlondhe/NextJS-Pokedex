import Image from "next/image";
import React from "react";
import navbarStyles from "../styles/components/Navbar.module.css";
import HomeIcon from "@mui/icons-material/HomeRounded";
import ProfileIcon from "@mui/icons-material/AccountCircleRounded";
import { NextComponentType } from "next";
import ListIcon from "@mui/icons-material/FormatListBulletedRounded";

const Navbar: NextComponentType = () => {
  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.home_link}>
        <div className={navbarStyles.home}>
          <HomeIcon className={navbarStyles.icons} />
          <p>HOME</p>
        </div>
      </div>
      <div className={navbarStyles.logo}>
        <Image
          src={"/images/logo.png"}
          height={"100%"}
          width={175}
          objectFit="contain"
        />
      </div>
      <div className={navbarStyles.profile_link}>
        <div className={navbarStyles.profile}>
          <p> LIST </p>
          <ListIcon className={navbarStyles.icons} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
