import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  return (
    <div>
      <h2>View Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.member_ID}>
            <p>Member ID: {member.member_ID}</p>
            <p>Customer ID: {member.customer_ID}</p>
            <p>Points: {member.points}</p>
            <p>Expiry Date: {member.expiryDate}</p>
            <p>Issue Date: {member.issueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMembers;
