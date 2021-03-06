import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {  Link } from 'react-router-dom';


const ITEM_HEIGHT = 48;

export default function LongMenu({CurrentUser}) {
    // let { userID } = useParams();
    console.log(CurrentUser)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem key="home" onClick={handleClose} component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem
          key="AddUser"
          onClick={handleClose}
          component={Link}
          to="/AddUser"
        >
          Add User
        </MenuItem>
        <MenuItem
          key="AddImage"
          onClick={handleClose}
          component={Link}
          to={"/AddPictures/"+CurrentUser}
        >
          Add Pictures
        </MenuItem>
      </Menu>
    </div>
  );
}
