import React, { useState } from 'react';
import axios from 'axios';

const DeleteEventReservation = () => {
    const [eventReservationId, setEventReservationId] = useState('');

    const handleChange = (e) => {
        setEventReservationId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/reservations/${eventReservationId}`);
            alert('Event reservation deleted successfully!');
            setEventReservationId('');
        } catch (error) {
            console.error('Error deleting event reservation:', error);
        }
    };

    return (
        <div>
            <h2>Delete Event Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Reservation ID:
                    <input type="number" value={eventReservationId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Event Reservation</button>
            </form>
        </div>
    );
};

export default DeleteEventReservation;
