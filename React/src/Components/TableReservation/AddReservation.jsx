import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddReservation = () => {
    const [reservation, setReservation] = useState({
        date: '',
        time: '',
        tableId: '',
        customerID: ''
    });
    const [tables, setTables] = useState([]);

    useEffect(() => {
        fetchTables();
    }, []);

    const fetchTables = async () => {
        try {
            const response = await axios.get('http://localhost:8080/tables');
            setTables(response.data);
        } catch (error) {
            console.error('Error fetching tables:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservation({ ...reservation, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.error(reservation)
            const response = await axios.post('http://localhost:8080/table-reservations', reservation);
            alert('Reservation added successfully!');
            setReservation({ date: '', time: '', tableId: '', customerID: '' });
        } catch (error) {
           
            console.error('Error adding reservation:', error);
        }
    };

    return (
        <div>
            <h2>Add Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="date" name="date" value={reservation.date} onChange={handleChange} required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={reservation.time} onChange={handleChange} required />
                </label>
                <label>
                    Table:
                    <select name="tableId" value={reservation.tableId} onChange={handleChange} required>
                        <option value="">Select Table</option>
                        {tables.map(table => (
                            <option key={table.id} value={table.id}>
                                {table.location} - {table.seatingCapacity} seats
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Customer ID:
                    <input type="number" name="customerID" value={reservation.customerID} onChange={handleChange} required />
                </label>
                <button type="submit">Add Reservation</button>
            </form>
        </div>
    );
};

export default AddReservation;
