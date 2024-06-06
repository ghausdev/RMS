import React, { useState } from 'react';
import axios from 'axios';

const DeleteCustomer = () => {
    const [customerId, setCustomerId] = useState('');

    const handleChange = (e) => {
        setCustomerId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/customers/${customerId}`);
            alert('Customer deleted successfully!');
            setCustomerId('');
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <div>
            <h2>Delete Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer ID:
                    <input type="number" value={customerId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Customer</button>
            </form>
        </div>
    );
};

export default DeleteCustomer;
