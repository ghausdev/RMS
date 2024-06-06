import React, { useState } from 'react';
import axios from 'axios';

const DeleteReservation = () => {
    const [reservationId, setReservationId] = useState('');

    const handleChange = (e) => {
        setReservationId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/table-reservations/${reservationId}`);
            alert('Reservation deleted successfully!');
            setReservationId('');
        } catch (error) {
            console.error('Error deleting reservation:', error);
        }
    };

    return (
        <div>
            <h2>Delete Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Reservation ID:
                    <input type="number" value={reservationId} onChange={handleChange} required />
                </label>
                <button type="submit">Delete Reservation</button>
            </form>
        </div>
    );
};

export default DeleteReservation;
