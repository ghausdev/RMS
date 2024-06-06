import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewReservation = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/table-reservations');
            setReservations(response.data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    return (
        <div>
            <h2>View Reservations</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        <p><strong>Date:</strong> {reservation.date}</p>
                        <p><strong>Time:</strong> {reservation.time}</p>
                        <p><strong>Table ID:</strong> {reservation.tableId}</p>
                        <p><strong>Customer ID:</strong> {reservation.customerID}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewReservation;
