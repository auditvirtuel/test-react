import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {useHistory} from "react-router-dom"

const divLogoStyle = {
  marginLeft: 5,
  display: "inline",
  textDecoration: "none",
  fontSize: 10,
};

export default function Horizontal({ selected }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    history.push('/login');
  };

  

  const [value, setValue] = React.useState(true);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component="button" color="secondary" to="/dashboard">
              <HomeIcon />
            </Link>
            <div id="logo" style={divLogoStyle}>
              Audit Virtuel
            </div>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose} href="/login">Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <AppBar position="static">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(event);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            isSelected={true}
            href="/products"
            label="Biens"
            icon={<HomeWorkIcon />}
          />
          <BottomNavigationAction
            href="/users"
            label="Uilisateurs"
            icon={<PersonIcon />}
          />
          
          <BottomNavigationAction
            href="/organizations"
            label="Organization"
            icon={<AccountBalanceIcon />}
          />
          <BottomNavigationAction
            href="/service-order"
            label="Ordre de service"
            icon={<AddCircleIcon />}
          />
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
