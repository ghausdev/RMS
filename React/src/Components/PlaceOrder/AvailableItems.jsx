import React from 'react';

const AvailableItems = ({ items, addToCart }) => {
    return (
        <div>
            <h2>Available Items</h2>
            <div>
                {items.map(item => (
                    <div key={item.itemId} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                        <p><strong>Name:</strong> {item.itemName}</p>
                        <p><strong>Category:</strong> {item.itemCategory}</p>
                        <p><strong>Price:</strong> ${item.itemPrice}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableItems;
