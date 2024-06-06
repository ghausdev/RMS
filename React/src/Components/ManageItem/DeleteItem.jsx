import React, { useState } from 'react';
import axios from 'axios';

const DeleteItem = () => {
    const [itemId, setItemId] = useState('');

    const handleChange = (e) => {
        setItemId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/items/${itemId}`);
            alert('Item deleted successfully!');
            setItemId('');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h2>Delete Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Item ID:
                    <input type="number" value={itemId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Item</button>
            </form>
        </div>
    );
};

export default DeleteItem;
