import React, { useState } from 'react';
import axios from "axios";
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ReferelForm = () => {
  const [formData, setFormData] = useState({
    cname: '',
    jobname: '',
    location: '',
    email: '',
    phone: '',
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
      const response = await axios.post('/ref', formData);
      console.log(response.data);
      
      alert('Referral submitted successfully');
      
      navigate('/homepage');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>Referral Form</Typography>
      <form onSubmit={handleSubmit}>
      <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="company name"
          name="cname"
          value={formData.cname}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Job name"
          name="jobname"
          value={formData.jobname}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="location"
          type="text"
          name="location"
          value={formData.location}
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
          label="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit Referral</Button>
      </form>
    </Container>
  );
};

export { ReferelForm };
