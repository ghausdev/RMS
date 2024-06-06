import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    return (
        <div>
            <h2>View Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customer_ID}>
                        <p><strong>Name:</strong> {customer.name}</p>
                        <p><strong>Password:</strong> {customer.password}</p>
                        <p><strong>Customer ID:</strong> {customer.customer_ID}</p>
                        <p><strong>Phone Number:</strong> {customer.phone_Number}</p>
                        <p><strong>Membership Status:</strong> {customer.membership_Status ? 'Active' : 'Inactive'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewCustomers;
