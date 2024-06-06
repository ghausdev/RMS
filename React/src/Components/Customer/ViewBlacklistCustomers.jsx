import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBlacklistCustomers = () => {
    const [blacklistedCustomers, setBlacklistedCustomers] = useState([]);

    useEffect(() => {
        fetchBlacklistedCustomers();
    }, []);

    const fetchBlacklistedCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/blacklistcustomers');
            setBlacklistedCustomers(response.data);
        } catch (error) {
            console.error('Error fetching blacklisted customers:', error);
        }
    };

    return (
        <div>
            <h2>View Blacklisted Customers</h2>
            <ul>
                {blacklistedCustomers.map(customer => (
                    <li key={customer.customerID}>
                        <p><strong>Customer ID:</strong> {customer.id}</p>
                        <p><strong>Description:</strong> {customer.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewBlacklistCustomers;
