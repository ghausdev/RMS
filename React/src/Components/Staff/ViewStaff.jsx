import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewStaff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const response = await axios.get('http://localhost:8080/staffs');
            setStaff(response.data);
        } catch (error) {
            console.error('Error fetching staff:', error);
        }
    };

    return (
        <div>
            <h2>View Staff</h2>
            <ul>
                {staff.map(staffMember => (
                    <li key={staffMember.staff_ID}>
                        <p><strong>Staff ID:</strong> {staffMember.staffid}</p>
                        <p><strong>Name:</strong> {staffMember.name}</p>
                        <p><strong>Start Time:</strong> {staffMember.startTime}</p>
                        <p><strong>End Time:</strong> {staffMember.endTime}</p>
                        <p><strong>Salary:</strong> {staffMember.salary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewStaff;
