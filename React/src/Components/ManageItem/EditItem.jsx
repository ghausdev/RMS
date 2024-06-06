import React, { useState } from 'react';
import axios from 'axios';

const EditItem = () => {
    const [itemId, setItemId] = useState('');
    const [item, setItem] = useState({
        itemName: '',
        itemCategory: '',
        itemPrice: '',
        availabilityUnit: ''
    });

    const handleIdChange = (e) => {
        setItemId(e.target.value);
    };

    const handleFetchClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/items/${itemId}`);
            setItem(response.data);
        } catch (error) {
            console.error('Error fetching item:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/items/${itemId}`, item);
            alert('Item updated successfully!');
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div>
            <h2>Edit Item</h2>
            <label>
                Item ID:
                <input type="number" value={itemId} onChange={handleIdChange} />
            </label>
            <button onClick={handleFetchClick}>Fetch Item</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Item Name:
                    <input type="text" name="itemName" value={item.itemName} onChange={handleChange} required />
                </label>
                <label>
                    Item Category:
                    <input type="text" name="itemCategory" value={item.itemCategory} onChange={handleChange} required />
                </label>
                <label>
                    Item Price:
                    <input type="number" name="itemPrice" value={item.itemPrice} onChange={handleChange} required />
                </label>
                <label>
                    Availability Unit:
                    <input type="number" name="availabilityUnit" value={item.availabilityUnit} onChange={handleChange} required />
                </label>
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
};

export default EditItem;
