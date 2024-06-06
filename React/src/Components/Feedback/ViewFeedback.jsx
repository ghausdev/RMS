import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/feedback');
            setFeedbacks(response.data);
        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    return (
        <div>
            <h2>View All Feedback</h2>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback.id}>
                        <p><strong>Food Rating:</strong> {feedback.foodRating}</p>
                        <p><strong>Ambience Rating:</strong> {feedback.ambienceRating}</p>
                        <p><strong>Service Rating:</strong> {feedback.serviceRating}</p>
                        <p><strong>Comment:</strong> {feedback.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewFeedback;
