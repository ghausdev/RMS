import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AvailableItems from './AvailableItems';
import Cart from './Cart';
import Checkout from './Checkout';

const ManagePlaceOrders = ({CID}) => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [checkoutInfo, setCheckoutInfo] = useState(null);

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

    const addToCart = (itemToAdd) => {
        const existingItemIndex = cart.findIndex(item => item.itemId === itemToAdd.itemId);
    
        if (existingItemIndex !== -1) {
            // If item already exists in cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // If item does not exist in cart, add it with quantity 1
            setCart([...cart, { ...itemToAdd, quantity: 1 }]);
        }
    };
    

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = quantity;
        setCart(updatedCart);
    };

    const handleCheckout = (customerInfo) => {
     
        setCheckoutInfo(customerInfo);
        setCart([]); // Clear the cart after checkout
    };

    return (
        <div>
            <h1>Place Orders</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '20px' }}>
                    <AvailableItems items={items} addToCart={addToCart} />
                </div>
                <div style={{ flex: '1' }}>
                    <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    
                </div>

                <div style={{ flex: '1' ,marginLeft: '30px'}}>
                    <Checkout cart={cart} onCheckout={handleCheckout} CID={CID} />
                </div>
            </div>
        </div>
    );
};

export default ManagePlaceOrders;
