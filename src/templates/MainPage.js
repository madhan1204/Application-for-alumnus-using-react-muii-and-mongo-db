// MainPage.js
import React, { useState } from 'react';
import { DenseAppBar } from "./NavBar";
import { Spotlight } from "./Spotlight";
import { AboutUs } from "./AboutUs"; // Import the AboutUs component
import { Box } from '@mui/material';
import { ReferelForm } from './Referel';
import { ReferelView } from './ViewReferel';
import { ViewEvents } from './Events';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('spotlight'); // State to track the active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <DenseAppBar onTabChange={handleTabChange} /> {/* Pass the handleTabChange function as a prop */}
      {activeTab === 'spotlight' && <Spotlight />}
      {activeTab === 'aboutUs' && <AboutUs />}
      {activeTab === 'Referel' && <ReferelForm />}
      {activeTab === 'Vref' && <ReferelView />}
      {activeTab === 'Vevent' && <ViewEvents />}
    </Box>
  );
};

export { MainPage };
