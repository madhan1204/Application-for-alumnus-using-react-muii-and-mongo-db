import React from 'react';
import { UserProvider } from './session/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './templates/landing';
import { Login } from './FormComponents/Login';
import { SignUpForm } from './FormComponents/SignUpForm';
import {HomePage} from './templates/homepage';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/homepage" element={<HomePage/>} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
