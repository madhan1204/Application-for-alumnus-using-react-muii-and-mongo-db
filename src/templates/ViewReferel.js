import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { ReferralView } from './ReferralView';

function ReferelView() {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReferrals = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/referrals');
      setReferrals(response.data);
    } catch (error) {
      console.error('Error fetching referrals:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  return (
    <>
      <Button color="inherit" onClick={fetchReferrals}>View Referral</Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ReferralView referrals={referrals} />
      )}
    </>
  );
};

export { ReferelView };
