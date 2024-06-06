import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewEventReservations = () => {
    const [eventReservations, setEventReservations] = useState([]);

    useEffect(() => {
        fetchEventReservations();
    }, []);

    const fetchEventReservations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reservations');
            setEventReservations(response.data);
        } catch (error) {
            console.error('Error fetching event reservations:', error);
        }
    };

    return (
        <div>
            <h2>View Event Reservations</h2>
            <ul>
                {eventReservations.map(eventReservation => (
                    <li key={eventReservation.event_Reservation_Id}>
                        <p><strong>ID:</strong> {eventReservation.event_Reservation_Id}</p>
                        <p><strong>Date:</strong> {eventReservation.date}</p>
                        <p><strong>Time:</strong> {eventReservation.time}</p>
                        <p><strong>Customer ID:</strong> {eventReservation.customerID}</p>
                        <p><strong>Description:</strong> {eventReservation.description}</p>
                        <p><strong>Number of Guests:</strong> {eventReservation.numberOfGuests}</p>
                        <p><strong>Banquet Hall:</strong> {eventReservation.banquet_Hall}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewEventReservations;
