import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBanquetHall = () => {
    const [banquetHallId, setBanquetHallId] = useState('');
    const [banquetHall, setBanquetHall] = useState({
        banquetHallName: '',
        capacity: '',
        availabilityStatus: true,
        rentalFee: '',
        costPerPerson: ''
    });

    const handleIdChange = (e) => {
        setBanquetHallId(e.target.value);
    };

    const fetchBanquetHall = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/banquethalls/${id}`);
            setBanquetHall(response.data);
        } catch (error) {
            console.error('Error fetching banquet hall:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBanquetHall({ ...banquetHall, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/banquet-halls/${banquetHallId}`, banquetHall);
            alert('Banquet hall updated successfully!');
        } catch (error) {
            console.error('Error updating banquet hall:', error);
        }
    };

    const handleFetchClick = () => {
        fetchBanquetHall(banquetHallId);
    };

    return (
        <div>
            <h2>Edit Banquet Hall</h2>
            <label>
                Banquet Hall ID:
                <input type="number" value={banquetHallId} onChange={handleIdChange} />
            </label>
            <button onClick={handleFetchClick}>Fetch Banquet Hall</button>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Update Banquet Hall</button>
            </form>
        </div>
    );
};

export default EditBanquetHall;
