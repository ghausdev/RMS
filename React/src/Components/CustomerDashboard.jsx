import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditCustomerDetails from './Customer/EditCustomerDetails';
import './AdminDashboard.css';
import axios from 'axios';

const CustomerDashboard = ({ customerDetails, setSelectedOption, customerID }) => {
  const [editing, setEditing] = useState(false);
  const [isBlacklisted, setIsBlacklisted] = useState(false);

  useEffect(() => {
    const fetchBlacklistStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/blacklistcustomers`);
        const isBlacklisted = response.data.some((customer) => customer.id === customerID);
        setIsBlacklisted(isBlacklisted);
        console.log('Blacklist status:', isBlacklisted);
      } catch (error) {
        console.error('Error fetching blacklist status:', error);
      }
    };
    fetchBlacklistStatus();
  }, [customerID]);

  return (
    <div>
      <h2>Hi! {customerDetails.name}</h2>
      {editing ? (
        <EditCustomerDetails customerDetails={customerDetails} setEditing={setEditing} />
      ) : (
        <div>
          <p>
            <strong>Membership Status:</strong> {customerDetails.membership_Status ? 'Active' : 'Inactive'}
          </p>

        </div>
      )}
      <div className="options-container">
        <div className="option-box" onClick={() => setEditing(true)}>
          Edit Details
        </div>
        <Link to="/feedback" className="option-box">
          Feedback
        </Link>
        {!isBlacklisted && (
          <Link to="/place-order" className="option-box">
            Place Order
          </Link>
        )}
        <Link to="/view-order" className="option-box">
          View Order
        </Link>
      </div>
    </div>
  );
};

export default CustomerDashboard;
