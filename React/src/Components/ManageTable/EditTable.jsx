import React, { useState } from 'react';
import axios from 'axios';

const EditTable = () => {
    const [table, setTable] = useState({
        id: '',
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
            const response = await axios.put(`http://localhost:8080/tables/${table.id}`, table);
            alert('Table edited successfully!');
            setTable({ id: '', availabilityStatus: true, location: '', seatingCapacity: '' });
        } catch (error) {
            console.error('Error editing table:', error);
        }
    };

    return (
        <div>
            <h2>Edit Table</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Table ID:
                    <input type="number" name="id" value={table.id} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={table.location} onChange={handleChange} required />
                </label>
                <label>
                    Seating Capacity:
                    <input type="number" name="seatingCapacity" value={table.seatingCapacity} onChange={handleChange} required />
                </label>
                <button type="submit">Edit Table</button>
            </form>
        </div>
    );
};

export default EditTable;
