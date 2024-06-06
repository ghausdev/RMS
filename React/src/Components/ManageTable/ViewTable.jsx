import React, { useState } from 'react';
import axios from 'axios';

const ViewTable = () => {
    const [tableId, setTableId] = useState('');
    const [table, setTable] = useState(null);

    const handleChange = (e) => {
        setTableId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/tables/${tableId}`);
            setTable(response.data);
        } catch (error) {
            console.error('Error viewing table:', error);
        }
    };

    return (
        <div>
            <h2>View Table</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Table ID:
                    <input type="number" value={tableId} onChange={handleChange} required />
                </label>
                <button type="submit">View Table</button>
            </form>
            {table && (
                <div>
                    <p><strong>Table ID:</strong> {table.id}</p>
                    <p><strong>Availability Status:</strong> {table.availabilityStatus.toString()}</p>
                    <p><strong>Location:</strong> {table.location}</p>
                    <p><strong>Seating Capacity:</strong> {table.seatingCapacity}</p>
                </div>
            )}
        </div>
    );
};

export default ViewTable;
