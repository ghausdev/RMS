import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditMember = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [memberDetails, setMemberDetails] = useState({
    customer_ID: '',
    points: 0,
    expiryDate: '',
    issueDate: ''
  });
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchMembers();
    fetchCustomers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

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
    setMemberDetails({ ...memberDetails, [name]: value });
  };

  const handleSelectMember = (e) => {
    const memberId = e.target.value;
    const member = members.find((m) => m.member_ID === parseInt(memberId));
    setSelectedMember(memberId);
    setMemberDetails(member);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/members/${selectedMember}`, memberDetails);
      alert('Member details updated successfully!');
    } catch (error) {
      console.error('Error updating member details:', error);
    }
  };

  return (
    <div>
      <h2>Edit Member</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Member:
          <select value={selectedMember} onChange={handleSelectMember} required>
            <option value="">Select Member</option>
            {members.map((member) => (
              <option key={member.member_ID} value={member.member_ID}>
                {member.member_ID}
              </option>
            ))}
          </select>
        </label>
        {selectedMember && (
          <>
            <label>
              Customer:
              <select name="customer_ID" value={memberDetails.customer_ID} onChange={handleChange} required>
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
              <input type="number" name="points" value={memberDetails.points} onChange={handleChange} required />
            </label>
            <label>
              Expiry Date:
              <input type="date" name="expiryDate" value={memberDetails.expiryDate} onChange={handleChange} required />
            </label>
            <label>
              Issue Date:
              <input type="date" name="issueDate" value={memberDetails.issueDate} onChange={handleChange} required />
            </label>
            <button type="submit">Update Member</button>
          </>
        )}
      </form>
    </div>
  );
};

export default EditMember;
