import React from 'react';
import logo192 from '../Assets/logo192.png';

import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavigationBar = () => {
  const navBarOptions = [
    {
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      text: "Portfolios",
      icon: <InfoIcon/>
    },
  ]
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo192} alt="React Logo" />
      </div>


      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Portfolios</a>
        <button className="primary-button">Contact</button>
      </div>

    </nav>
  );
};

export default NavigationBar;
