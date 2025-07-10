import React, { useState } from "react";

import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleOpen = () => {
    navigate("/profilepage");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
    handleClose();
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleClick}
          sx={{ p: 0, marginLeft: { xs: "1rem", md: "none" } }}
        >
          <Avatar>{user?.firstname?.charAt(0).toUpperCase() || "U"}</Avatar>
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleOpen}>Profile</MenuItem>
        <MenuItem onClick={handleLogin}>Login</MenuItem>
      </Menu>
    </>
  );
};

export default DropDownMenu;
