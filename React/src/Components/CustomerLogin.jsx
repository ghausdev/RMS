import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CustomerLogin = ({ onLogin }) => {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/customers/${ID}`);
      if (response.data.password === password) {
        onLogin(response.data);
        navigate('/customer-dashboard');
      } else {
        setError('Incorrect password');
      }
    } catch (error) {
      setError('Customer not found');
    }
  };

  return (
    <div className="login-container">
      <h2>Customer Login</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>ID</label>
        <input
          type="text"
          value={ID}
          onChange={(e) => setID(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default CustomerLogin;
