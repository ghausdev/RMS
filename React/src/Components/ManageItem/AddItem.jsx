import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [item, setItem] = useState({
        itemName: '',
        itemCategory: '',
        itemPrice: '',
        availabilityUnit: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/items', item);
            alert('Item added successfully!');
            setItem({ itemName: '', itemCategory: '', itemPrice: '', availabilityUnit: '' });
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div>
            <h2>Add Item</h2>
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
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
