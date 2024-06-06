import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerRegister = ({ onRegister }) => {
  const [customer, setCustomer] = useState({
    name: '',
    password: '',
    phone_Number: '',
    membership_Status: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/customers', customer);
      alert('Customer registered successfully! Customer ID: ' + response.data.customer_ID);
      onRegister(response.data);
      navigate('/customer-dashboard');
    } catch (error) {
      console.error('Error registering customer:', error);
    }
  };

  return (
    <div>
      <h2>Customer Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={customer.name} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={customer.password} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone_Number" value={customer.phone_Number} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CustomerRegister;
