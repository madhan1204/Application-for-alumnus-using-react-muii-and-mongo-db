import { Box, Typography, Paper } from '@mui/material';
import React from 'react';

function Spotlight() {
  return (
    <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Spotlight
      </Typography>
      <Typography>
        Welcome to the MCA Alumni Spotlight section. Here we will feature updates, achievements, and stories from our alumni community.
      </Typography>
      <Typography>
        to conduct guest lecture we need alumini to present their experties in the domain conducted by SCORE.
      </Typography>

    </Paper>
  );
};

export {Spotlight};