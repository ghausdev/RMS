import React, { useState } from 'react';
import axios from 'axios';

const AddBanquetHall = () => {
    const [banquetHall, setBanquetHall] = useState({
        banquetHallId : 0,
        banquetHallName: '',
        capacity: 0,
        availabilityStatus: true,
        rentalFee: 0,
        costPerPerson: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBanquetHall({ ...banquetHall, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(banquetHall);
            const response = await axios.post('http://localhost:8080/banquet-halls', banquetHall);
            alert('Banquet hall added successfully!');
            setBanquetHall({ banquetHallName: '', capacity: '', availabilityStatus: true, rentalFee: '', costPerPerson: '' });
        } catch (error) {
            console.error('Error adding banquet hall:', error);
        }
    };

    return (
        <div>
            <h2>Add Banquet Hall</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Banquet Hall ID:
                    <input type="number" name="banquetHallId" value={banquetHall.banquetHallId} onChange={handleChange} required /> 
                </label>
                <label>
                    Banquet Hall Name:
                    <input type="text" name="banquetHallName" value={banquetHall.banquetHallName} onChange={handleChange} required />
                </label>
                <label>
                    Capacity:
                    <input type="number" name="capacity" value={banquetHall.capacity} onChange={handleChange} required />
                </label>
                <label>
                    Availability Status:
                    <input type="checkbox" name="availabilityStatus" checked={banquetHall.availabilityStatus} onChange={(e) => setBanquetHall({ ...banquetHall, availabilityStatus: e.target.checked })} />
                </label>
                <label>
                    Rental Fee:
                    <input type="number" name="rentalFee" value={banquetHall.rentalFee} onChange={handleChange} required />
                </label>
                <label>
                    Cost Per Person:
                    <input type="number" name="costPerPerson" value={banquetHall.costPerPerson} onChange={handleChange} required />
                </label>
                <button type="submit">Add Banquet Hall</button>
            </form>
        </div>
    );
};

export default AddBanquetHall;
