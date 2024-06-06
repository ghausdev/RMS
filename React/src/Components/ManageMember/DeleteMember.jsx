import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteMember = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');

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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/members/${selectedMember}`);
      alert('Member deleted successfully!');
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div>
      <h2>Delete Member</h2>
      <label>
        Select Member:
        <select value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)} required>
          <option value="">Select Member</option>
          {members.map((member) => (
            <option key={member.member_ID} value={member.member_ID}>
              {member.member_ID}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Member</button>
    </div>
  );
};

export default DeleteMember;
