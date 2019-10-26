import { createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    toggleHiddent: () => {}
});

export default CartContext;

