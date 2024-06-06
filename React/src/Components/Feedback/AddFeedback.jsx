import React, { useState } from 'react';
import axios from 'axios';

const AddFeedback = () => {
    const [feedback, setFeedback] = useState({
        foodRating: '',
        ambienceRating: '',
        serviceRating: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/feedback', feedback);
            alert('Feedback added successfully!');
            setFeedback({ foodRating: '', ambienceRating: '', serviceRating: '', comment: '' });
        } catch (error) {
            console.error('Error adding feedback:', error);
        }
    };

    return (
        <div>
            <h2>Add Feedback</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Food Rating:
                    <input type="number" name="foodRating" value={feedback.foodRating} onChange={handleChange} required />
                </label>
                <label>
                    Ambience Rating:
                    <input type="number" name="ambienceRating" value={feedback.ambienceRating} onChange={handleChange} required />
                </label>
                <label>
                    Service Rating:
                    <input type="number" name="serviceRating" value={feedback.serviceRating} onChange={handleChange} required />
                </label>
                <label>
                    Comment:
                    <textarea name="comment" value={feedback.comment} onChange={handleChange} required />
                </label>
                <button type="submit">Add Feedback</button>
            </form>
        </div>
    );
};

export default AddFeedback;
