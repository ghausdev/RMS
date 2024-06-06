import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const totalBill = cart.reduce((total, item) => total + (item.itemPrice * item.quantity), 0);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <p><strong>Name:</strong> {item.itemName}</p>
                        <p><strong>Price:</strong> ${item.itemPrice}</p>
                        <input type="number" value={item.quantity} onChange={(e) => updateQuantity(index, parseInt(e.target.value))} />
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p><strong>Total Bill:</strong> ${totalBill.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
