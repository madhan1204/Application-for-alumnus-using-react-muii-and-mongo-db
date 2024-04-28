import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import backgroundImage from '../images/land.svg';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleLoginClick}>
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleSignUpClick}>
            SignUp
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export { Welcome };
