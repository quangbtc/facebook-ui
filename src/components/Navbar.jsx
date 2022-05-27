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
} from "@mui/material";
import React from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
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
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          FaceBook
        </Typography>
        <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/39222832?v=4"
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/39222832?v=4"
          />
          <Typography variant="span">Quang PT</Typography>
        </UserBox>
      </StyleToolbar>
    </AppBar>
  );
};

export default Navbar;
