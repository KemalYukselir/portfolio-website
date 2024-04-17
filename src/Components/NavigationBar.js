import React, {useState } from "react";
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
  const handleHomeClick = () => {
    window.scrollTo(0, document.body.scrollHeight / 100);
  };
  const handleContactClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  const handlePortfoliosClick = () => {
    window.scrollTo(0, document.body.scrollHeight / 6);
  };

  const navBarOptions = [
    {
      text: "Home",
      icon: <HomeIcon/>,
      onClick: handleHomeClick
    },
    {
      text: "Portfolios",
      icon: <InfoIcon/>,
      onClick: handlePortfoliosClick
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon/>,
      onClick: handleContactClick
    },
  ]


  return (
    <nav>
      {/* <div className="nav-logo-container">
        <img src={logo192} alt="React Logo" />
      </div> */}

      <div className="navbar-links-container">
        <a href="#home" onClick={handleHomeClick}>Home</a>
        <a href="#portfolios" onClick={handlePortfoliosClick}>Portfolios</a>
        <a href="#contact" onClick={handleContactClick}>Contact</a>
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
                <ListItemButton onClick={item.onClick}>
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
