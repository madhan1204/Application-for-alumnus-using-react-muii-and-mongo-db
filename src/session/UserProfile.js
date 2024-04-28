import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserProfile = ({ user }) => {
  const formattedDob = new Date(user.dob).toLocaleDateString();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Profile</Typography>
        <Typography>Name: {user.name}</Typography>
        <Typography>Reg No: {user.regNo}</Typography>
        <Typography>DOB: {formattedDob}</Typography>
        <Typography>Email: {user.email}</Typography>
      </CardContent>
    </Card>
  );
};

export {UserProfile};
