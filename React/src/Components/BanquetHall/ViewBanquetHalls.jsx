import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBanquetHalls = () => {
    const [banquetHalls, setBanquetHalls] = useState([]);

    useEffect(() => {
        fetchBanquetHalls();
    }, []);

    const fetchBanquetHalls = async () => {
        try {
            const response = await axios.get('http://localhost:8080/banquet-halls');
            setBanquetHalls(response.data);
        } catch (error) {
            console.error('Error fetching banquet halls:', error);
        }
    };

    return (
        <div>
            <h2>View Banquet Halls</h2>
            <ul>
                {banquetHalls.map(banquetHall => (
                    <li key={banquetHall.banquetHallId}>
                        <p><strong>ID:</strong> {banquetHall.banquetHallId}</p>
                        <p><strong>Name:</strong> {banquetHall.banquetHallName}</p>
                        <p><strong>Capacity:</strong> {banquetHall.capacity}</p>
                        <p><strong>Availability Status:</strong> {banquetHall.availabilityStatus ? 'Available' : 'Not Available'}</p>
                        <p><strong>Rental Fee:</strong> ${banquetHall.rentalFee}</p>
                        <p><strong>Cost Per Person:</strong> ${banquetHall.costPerPerson}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewBanquetHalls;
