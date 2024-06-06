import React, { useState } from 'react';
import axios from 'axios';

const AddTable = () => {
    const [table, setTable] = useState({
        availabilityStatus: true,
        location: '',
        seatingCapacity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTable({ ...table, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/tables', table);
            alert('Table added successfully!');
            setTable({ availabilityStatus: true, location: '', seatingCapacity: '' });
        } catch (error) {
            console.error('Error adding table:', error);
        }
    };
    

    return (
        <div>
            <h2>Add Table</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Location:
                    <input type="text" name="location" value={table.location} onChange={handleChange} required />
                </label>
                <label>
                    Seating Capacity:
                    <input type="number" name="seatingCapacity" value={table.seatingCapacity} onChange={handleChange} required />
                </label>
                <button type="submit">Add Table</button>
            </form>
        </div>
    );
};

export default AddTable;
