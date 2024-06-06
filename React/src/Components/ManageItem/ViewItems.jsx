import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8080/items');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return (
        <div>
            <h2>View Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.itemId}>
                        <p><strong>ID:</strong> {item.itemId}</p>
                        <p><strong>Name:</strong> {item.itemName}</p>
                        <p><strong>Category:</strong> {item.itemCategory}</p>
                        <p><strong>Price:</strong> {item.itemPrice}</p>
                        <p><strong>Availability Unit:</strong> {item.availabilityUnit}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewItems;
