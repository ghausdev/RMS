import React, { useState } from 'react';
import axios from 'axios';

const EditCustomerDetails = ({ customerDetails, setEditing }) => {
  const [customer, setCustomer] = useState(customerDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/customers/${customer.customer_ID}`, customer);
      alert('Customer details updated successfully!');
      setEditing(false);
    } catch (error) {
      console.error('Error updating customer details:', error);
    }
  };

  return (
    <div>
      <h2>Edit Customer Details</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditCustomerDetails;
