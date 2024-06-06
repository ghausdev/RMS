import React, { useState } from 'react';
import axios from 'axios';

const DeleteStaff = () => {
    const [staffId, setStaffId] = useState('');

    const handleChange = (e) => {
        setStaffId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/staffs/${staffId}`);
            alert('Staff member deleted successfully!');
            setStaffId('');
        } catch (error) {
            console.error('Error deleting staff member:', error);
        }
    };

    return (
        <div>
            <h2>Delete Staff</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Staff ID:
                    <input type="number" value={staffId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Staff</button>
            </form>
        </div>
    );
};

export default DeleteStaff;
