import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditStaff = () => {
    const [staffId, setStaffId] = useState('');
    const [staff, setStaff] = useState({
        name: '',
        startTime: '',
        endTime: '',
        salary: ''
    });

    const handleIdChange = (e) => {
        setStaffId(e.target.value);
    };

    const handleFetchClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/staff/${staffId}`);
            setStaff(response.data);
        } catch (error) {
            console.error('Error fetching staff member:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff({ ...staff, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/staffs/${staffId}`, staff);
            alert('Staff member updated successfully!');
        } catch (error) {
            console.error('Error updating staff member:', error);
        }
    };

    return (
        <div>
            <h2>Edit Staff</h2>
            <label>
                Staff ID:
                <input type="number" value={staffId} onChange={handleIdChange} />
            </label>
            <button onClick={handleFetchClick}>Fetch Staff</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={staff.name} onChange={handleChange} required />
                </label>
                <label>
                    Start Time:
                    <input type="time" name="startTime" value={staff.startTime} onChange={handleChange} required />
                </label>
                <label>
                    End Time:
                    <input type="time" name="endTime" value={staff.endTime} onChange={handleChange} required />
                </label>
                <label>
                    Salary:
                    <input type="number" name="salary" value={staff.salary} onChange={handleChange} required />
                </label>
                <button type="submit">Update Staff</button>
            </form>
        </div>
    );
};

export default EditStaff;
