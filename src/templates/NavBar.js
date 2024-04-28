import * as React from 'react';
import { useState,useContext } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../session/UserContext';
import { UserProfile } from '../session/UserProfile';
import { useNavigate } from 'react-router-dom';

function DenseAppBar({ onTabChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user,setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // Function to handle logout
    const handleLogout = () => {
    // Clear user from context
    setUser(null);
    // Remove user from localStorage
    localStorage.removeItem('user');

    navigate('/');
  };
  
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton
         edge="end"
         color="inherit"
         aria-label="account of current user"
         aria-controls="menu-appbar"
         aria-haspopup="true"
         onClick={handleMenuClick}
         sx={{ paddingRight: 4 }}
        >
         <MenuIcon />
        </IconButton>

          <Typography variant="h6" color="inherit" component="div">
            MCA ALUMNI
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => onTabChange('aboutUs')}>About Us</Button>
            <Button color="inherit" onClick={() => onTabChange('Vevent')}>Event</Button>
            <Button color="inherit" onClick={() => onTabChange('Referel')}>Referel</Button>
            <Button color="inherit">Mentor</Button>
            <Button color="inherit" onClick={() => onTabChange('Vref')}>View Referel</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <UserProfile user={user} /> {/* Display the user profile here */}
        </MenuItem>
      </Menu>
    </Box>
  );
}
export {DenseAppBar};