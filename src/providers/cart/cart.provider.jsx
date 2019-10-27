import React, { createContext, useState, useEffect } from 'react';

import  { addItemToCart, removeItemFromCart } from  './cart.utils';

const CartContext = createContext({
    hidden:true,
    toggeleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);

    return <CartContext.Provider>{children}</CartContext.Provider>;

}