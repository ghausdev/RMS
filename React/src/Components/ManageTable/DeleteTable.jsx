import React, { useState } from 'react';
import axios from 'axios';

const DeleteTable = () => {
    const [tableId, setTableId] = useState('');

    const handleChange = (e) => {
        setTableId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/tables/${tableId}`);
            alert('Table deleted successfully!');
            setTableId('');
        } catch (error) {
            console.error('Error deleting table:', error);
        }
    };

    return (
        <div>
            <h2>Delete Table</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Table ID:
                    <input type="number" value={tableId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Table</button>
            </form>
        </div>
    );
};

export default DeleteTable;
