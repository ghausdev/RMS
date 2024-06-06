import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome Admin</h2>
      <div className="options-container">
        <div className="option-box" onClick={() => navigate('/table-reservation')}>Table Reservation</div>
        <div className="option-box" onClick={() => navigate('/event-reservation')}>Event Reservation</div>
        <div className="option-box" onClick={() => navigate('/manage-table')}>Manage Table</div>
        <div className="option-box" onClick={() => navigate('/manage-members')}>Member Registry</div>
        <div className="option-box" onClick={() => navigate('/feedback')}>Feedback</div>
        <div className="option-box" onClick={() => navigate('/banquet-hall')}>Manage Banquet Hall</div>
        <div className="option-box" onClick={() => navigate('/manage-items')}>Manage Item</div>
        <div className="option-box" onClick={() => navigate('/manage-customers')}>Manage Customers</div>
        <div className="option-box" onClick={() => navigate('/manage-staff')}>Manage Staff</div>
        <div className="option-box" onClick={() => navigate('/blacklist-customer')}>Blacklist Customer</div>
        <div className="option-box" onClick={() => navigate('/manage-orders')}>Manage Order</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
