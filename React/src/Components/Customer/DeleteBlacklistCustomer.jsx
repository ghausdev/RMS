import React, { useState } from 'react';
import axios from 'axios';

const DeleteBlacklistCustomer = () => {
    const [customerID, setCustomerID] = useState('');

    const handleChange = (e) => {
        setCustomerID(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/blacklistcustomers/${customerID}`);
            alert('Blacklisted customer deleted successfully!');
            setCustomerID('');
        } catch (error) {
            console.error('Error deleting blacklisted customer:', error);
        }
    };

    return (
        <div>
            <h2>Delete Blacklisted Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer ID:
                    <input type="text" value={customerID} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Blacklisted Customer</button>
            </form>
        </div>
    );
};

export default DeleteBlacklistCustomer;
