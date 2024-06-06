import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBlacklistCustomer = () => {
    const [customerOptions, setCustomerOptions] = useState([]);
    const [customerID, setCustomerID] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/customers');
            setCustomerOptions(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const handleChangeCustomer = (e) => {
        setCustomerID(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const blc = {
                id: customerID,
                description: description

            }
            await axios.post('http://localhost:8080/blacklistcustomers', blc);
            alert('Blacklisted customer added successfully!');
            setCustomerID('');
            setDescription('');
        } catch (error) {
            console.error('Error adding blacklisted customer:', error);
        }
    };

    return (
        <div>
            <h2>Add Blacklisted Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer:
                    <select value={customerID} onChange={handleChangeCustomer} required>
                        <option value="">Select Customer</option>
                        {customerOptions.map(customer => (
                            <option key={customer.customer_ID} value={customer.customer_ID}>
                                {customer.name} ({customer.customer_ID})
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={handleChangeDescription} required />
                </label>
                <button type="submit">Add Blacklisted Customer</button>
            </form>
        </div>
    );
};

export default AddBlacklistCustomer;
