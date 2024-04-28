import React, { useState , useContext} from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { UserProvider , UserContext } from '../session/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setInputValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: inputValues.email,
        password: inputValues.password,
      });
  
    
      console.log('Login successful:', response.data);
  
      // Reset form fields and errors
      setInputValues({ email: '', password: '' });
      setError('');
  
      // Redirect to the home page
      if (response.data.user) {
        setUser(response.data.user); // Set the user context
        navigate('/homepage');
      } // Use navigate to redirect
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login error:', error);
    }
  };
  
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        MCA Login Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          id="email"
          name="email"
          value={inputValues.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          value={inputValues.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export { Login };
