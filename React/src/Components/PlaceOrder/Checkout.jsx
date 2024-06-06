import React, { useState } from 'react';
import axios from 'axios';

const Checkout = ({ cart,CID1 }) => {
    const [customerInfo, setCustomerInfo] = useState({});
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({ ...customerInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const totalBill = cart.reduce((total, item) => total + (item.itemPrice * item.quantity), 0);
        console.log(totalBill);
        // Prepare order object
        const order = {
            address: customerInfo.address,
            bill: 22.0,
            customerId: CID1
        };

        try {
            // Save the order
            const orderResponse = await axios.post('http://localhost:8080/orders', order);
            const orderId = orderResponse.data.orderId;

            // Save each carted item as order line item
            cart.forEach(async (item) => {
                const orderLineItem = {
                    name: item.itemName,
                    quantity: item.quantity,
                    unitPrice: item.itemPrice,
                    orderId: orderId
                };
                await axios.post('http://localhost:8080/orderLineItems', orderLineItem);
            });

            // Clear the cart and customer info after successful checkout
            setCustomerInfo({});
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Address:
                    <input type="text" name="address" value={customerInfo.address || ''} onChange={handleChange} required />
                </label>
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default Checkout;
