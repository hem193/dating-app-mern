import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
// import IconButton from '@material-ui/core/IconButton'
import Icon from "@mui/material/Icon";

import ForumIcon from "@mui/icons-material/Forum";
const Header = () => {
  return (
    <div className="header">
      <Icon>
        <PersonIcon fontSize="large" className="header__icon" />
      </Icon>
      <img className="header__logo" src="logo192.png" alt="header" />
      <Icon>
        <ForumIcon fontSize="large" className="header__icon" />
      </Icon>
    </div>
  );
};
export default Header;
