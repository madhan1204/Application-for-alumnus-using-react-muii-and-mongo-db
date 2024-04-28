// AboutUs.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography>
        Learn more about the MCA Alumni Association, our mission, and our activities.
      </Typography>
      {/* Add more content as needed */}
    </Paper>
  );
};

export { AboutUs };
