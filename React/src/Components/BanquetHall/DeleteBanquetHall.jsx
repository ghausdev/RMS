import React, { useState } from 'react';
import axios from 'axios';

const DeleteBanquetHall = () => {
    const [banquetHallId, setBanquetHallId] = useState('');

    const handleChange = (e) => {
        setBanquetHallId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(banquetHallId);
            await axios.delete(`http://localhost:8080/banquet-halls/${banquetHallId}`);
            alert('Banquet hall deleted successfully!');
            setBanquetHallId('');
        } catch (error) {
            console.error('Error deleting banquet hall:', error);
        }
    };

    return (
        <div>
            <h2>Delete Banquet Hall</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Banquet Hall ID:
                    <input type="number" value={banquetHallId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Banquet Hall</button>
            </form>
        </div>
    );
};

export default DeleteBanquetHall;
