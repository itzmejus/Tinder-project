import React from "react";
import "../styles/Navbar.css";
import { IconButton } from "@mui/material";
import ForumIcon from "@material-ui/icons/Forum";
import PermIdentityIcon from "@material-ui/icons//PermIdentity";
function Navbar() {
  return (
    <div className="navbar">
      <IconButton>
        <PermIdentityIcon fontSize="large" className="nav-icon" />
      </IconButton>
      <img
        className="tinder-img"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Symbol.png"
        alt="logo img"
      />
      <IconButton>

      <ForumIcon fontSize="large" className="nav-icon" />
      </IconButton>
    </div>
  );
}

export default Navbar;
