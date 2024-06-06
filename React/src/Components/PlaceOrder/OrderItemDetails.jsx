import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderItemDetails = ({ orderId }) => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        fetchOrderItems();
    }, [orderId]);

    const fetchOrderItems = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/orderLineItems?orderId=${orderId}`);
            setOrderItems(response.data);
        } catch (error) {
            console.error('Error fetching order items:', error);
        }
    };

    return (
        <div>
            <h3>Order Items</h3>
            <ul>
                {orderItems.map(item => (
                    <li key={item.orderLineItemID}>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                        <p><strong>Unit Price:</strong> ${item.unitPrice}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderItemDetails;
