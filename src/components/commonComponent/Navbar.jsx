import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import { NotiContext } from "../App";
import { useNavigate } from "react-router-dom";
import Dialog_Form from "./Dialog_Form";
import Mail from "./mail.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "calc(1em + ${theme.spacing(4)})",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  let navigate = useNavigate();
  const [notiOpen, setNotiOpen] = React.useContext(NotiContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNoti = () => {
    setNotiOpen(!notiOpen);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{
        marginTop: "50px",
        width: "300px !important",
      }}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/profile");
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/login");
        }}
      >
        Log out
      </MenuItem>
    </Menu>
  );
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} elevation={0}>
        <AppBar
          position="fixed"
          style={{
            height: "60px",
            padding: "0px 110px",
          }}
          elevation={0}
        >
          <Toolbar>
            <div
              style={{ display: "flex", cursor: "pointer", color: "white" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                ELITE
              </Typography>
              <img
                src={Mail}
                alt="mail"
                style={{ color: "white", width: 30, height: 30, marginLeft: 7 }}
              />
            </div>
            <Search
              style={{
                width: "300px",
                borderRadius: "15px",
                marginLeft: "260px",
                height: "37px",
                paddingLeft: 50,
              }}
            >
              <SearchIconWrapper
                style={{
                  position: "absolute",
                  left: 0,
                }}
              >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{
                  top: -0.5,
                }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                {/* <Badge badgeContent={4} color="error"> */}
                <HomeIcon style={{ width: "35px", height: "35px" }} />
                {/* </Badge> */}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {/* <Badge badgeContent={4} color="error"> */}
                <AddCircleIcon
                  style={{ width: "30px", height: "30px" }}
                  onClick={handleClickOpen}
                />
                {/* </Badge> */}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => handleNoti()}
              >
                <Badge badgeContent={notiOpen ? null : 1} color="error">
                  <NotificationsIcon
                    style={{ width: "30px", height: "30px" }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle style={{ width: "30px", height: "30px" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      <Dialog_Form open={open} onClose={handleClose} closeform={closeForm} />
    </>
  );
}
