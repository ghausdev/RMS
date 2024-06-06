import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderItemDetails from './OrderItemDetails';

const OrderDetailsComponent = ({ customerId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, [customerId]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/orders?customerId=${customerId}`);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div>
            <h2>Orders</h2>
            {orders.map(order => (
                <div key={order.orderId} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <p><strong>Order ID:</strong> {order.orderId}</p>
                    <p><strong>Address:</strong> {order.address}</p>
                    <p><strong>Bill:</strong> ${order.bill}</p>
                    <OrderItemDetails orderId={order.orderId} />
                </div>
            ))}
        </div>
    );
};

export default OrderDetailsComponent;
