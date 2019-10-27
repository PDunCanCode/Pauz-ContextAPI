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
