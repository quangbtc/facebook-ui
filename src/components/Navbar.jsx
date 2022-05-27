import React from "react";
import { useState } from "react";
import { Facebook, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  color: "primary",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  cursor: "pointer",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ mode }) => {
  const [open, setOpen] = useState(false);
  const bg = mode === "light" ? "white" : "background.default";
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          FaceBook
        </Typography>
        <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{ background: bg }}>
          <InputBase placeholder="Search something..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/39222832?v=4"
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={() => setOpen(true)}
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/39222832?v=4"
          />
          <Typography variant="span">Quang PT</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyleToolbar>
    </AppBar>
  );
};

export default Navbar;
