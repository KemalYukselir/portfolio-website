import React, {useState } from "react";
import logo192 from '../Assets/logo192.png';
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
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navBarOptions = [
    {
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      text: "Portfolios",
      icon: <InfoIcon/>
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon/>
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
        <a href="">Contact</a>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {navBarOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>


    </nav>
  );
};

export default NavigationBar;
