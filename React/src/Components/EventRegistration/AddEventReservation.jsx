import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddEventReservation = () => {
    const [eventReservation, setEventReservation] = useState({
        event_Reservation_Id: '',
        date: '',
        time: '',
        bill: 0.0,
        customerID: '',
        description: '',
        numberOfGuests: '',
        banquet_Hall: ''
    });
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventReservation({ ...eventReservation, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/reservations', eventReservation);
            alert('Event reservation added successfully!');
            setEventReservation({ date: '', time: '', bill: 0.0, customerID: '', description: '', numberOfGuests: '', banquet_Hall: '' });
        } catch (error) {
            console.error('Error adding event reservation:', error);
        }
    };

    return (
        <div>
            <h2>Add Event Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="number" name="event_Reservation_Id" value={eventReservation.event_Reservation_Id} onChange={handleChange} required />
                </label>
                
                <label>
                    Date:
                    <input type="date" name="date" value={eventReservation.date} onChange={handleChange} required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={eventReservation.time} onChange={handleChange} required />
                </label>
                <label>
                    Customer ID:
                    <input type="number" name="customerID" value={eventReservation.customerID} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={eventReservation.description} onChange={handleChange} required />
                </label>
                <label>
                    Number of Guests:
                    <input type="number" name="numberOfGuests" value={eventReservation.numberOfGuests} onChange={handleChange} required />
                </label>
                <label>
                    Banquet Hall:
                    <select name="banquet_Hall" value={eventReservation.banquet_Hall} onChange={handleChange} required>
                        <option value="">Select Banquet Hall</option>
                        {banquetHalls.map(banquetHall => (
                            <option key={banquetHall.banquetHallId} value={banquetHall.banquetHallId}>
                                {banquetHall.banquetHallName}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Add Event Reservation</button>
            </form>
        </div>
    );
};

export default AddEventReservation;
