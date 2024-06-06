import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddMember = () => {
  const [member, setMember] = useState({
    customer_ID: '',
    points: 0,
    expiryDate: '',
    issueDate: ''
  });
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cust = customers.find((c) => c.customer_ID === parseInt(member.customer_ID));
      cust.membership_Status = true;
      await axios.put(`http://localhost:8080/customers/${member.customer_ID}`, cust);
      await axios.post('http://localhost:8080/members', member);
      alert('Member added successfully!');
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <div>
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer:
          <select name="customer_ID" value={member.customer_ID} onChange={handleChange} required>
            <option value="">Select Customer</option>
            {customers.map((customer) => (
              <option key={customer.customer_ID} value={customer.customer_ID}>
                {customer.name} (ID: {customer.customer_ID})
              </option>
            ))}
          </select>
        </label>
        <label>
          Points:
          <input type="number" name="points" value={member.points} onChange={handleChange} required />
        </label>
        <label>
          Expiry Date:
          <input type="date" name="expiryDate" value={member.expiryDate} onChange={handleChange} required />
        </label>
        <label>
          Issue Date:
          <input type="date" name="issueDate" value={member.issueDate} onChange={handleChange} required />
        </label>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
