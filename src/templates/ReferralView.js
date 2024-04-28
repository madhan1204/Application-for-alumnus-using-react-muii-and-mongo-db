import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const ReferralView = ({ referrals }) => {
  return (
    <Grid container spacing={2}>
      {referrals.map((ref, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>{ref.cname}</Typography>
              <Typography variant="body2">{ref.jobname}</Typography>
              <Typography variant="body2">{ref.location}</Typography>
              <Typography variant="body2">{ref.email}</Typography>
              <Typography variant="body2">{ref.phone}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export { ReferralView };
