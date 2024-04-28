import React, { useState } from 'react';
import axios from "axios";
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    dob: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('/signup', formData);
      console.log(response.data);
      
      alert('Signed up successfully');
      
      // Redirect to the login form
      navigate('/login'); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>Sign Up Page</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Reg No"
          name="regNo"
          value={formData.regNo}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="DOB"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
      </form>
    </Container>
  );
};

export {SignUpForm};
