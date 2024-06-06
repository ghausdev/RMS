import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetails from './OrderDetails';

const ManageOrdersComponent = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8080/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`http://localhost:8080/orders/${orderId}`);
            setOrders(orders.filter(order => order.orderId !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    return (
        <div>
            <h2>Manage Orders</h2>
            {orders.map(order => (
                <div key={order.orderId} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <p><strong>Order ID:</strong> {order.orderId}</p>
                    <p><strong>Address:</strong> {order.address}</p>
                    <p><strong>Bill:</strong> ${order.bill}</p>
                    <OrderDetails orderId={order.orderId} />
                    <button onClick={() => handleDeleteOrder(order.orderId)}>Delete Order</button>
                </div>
            ))}
        </div>
    );
};

export default ManageOrdersComponent;
