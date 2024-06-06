import React, { useState } from 'react';
import axios from 'axios';

const AddStaff = () => {
    const [staff, setStaff] = useState({
        name: '',
        startTime: '',
        endTime: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff({ ...staff, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/staffs', staff);
            alert('Staff member added successfully!');
            setStaff({ name: '', startTime: '', endTime: '', salary: '' });
        } catch (error) {
            console.error('Error adding staff member:', error);
        }
    };

    return (
        <div>
            <h2>Add Staff</h2>
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
                <button type="submit">Add Staff</button>
            </form>
        </div>
    );
};

export default AddStaff;
