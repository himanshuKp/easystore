import {CART_ACTIONS, cartReducer} from "./CartReducer.jsx";
import {useCallback, useEffect, useMemo, useReducer} from "react";
import {CartContext} from "./CartContext.jsx";

/**
 * Generates the initial cart state from localStorage.
 * @returns {Array<Object>} The parsed cart array or empty array if failed.
 */
const initialCartState = () => {
    try {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.log("Error creating cart", error);
        return [];
    }
};

/**
 * Provides Cart context to the application, holding state and dispatch functions.
 * 
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 */
export const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, [], initialCartState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = useCallback((product, quantity) => {
        dispatch({type: CART_ACTIONS.ADD, payload: {product, quantity}});
    }, []);

    const removeFromCart = useCallback((productId) => {
        dispatch({type: CART_ACTIONS.REMOVE, payload: {productId}})
    }, []);

    const clearCart = useCallback(() => {
        dispatch({type: CART_ACTIONS.CLEAR})
    }, []);

    const totalQuantity = useMemo(() => (
        cart.reduce((acc, item) => acc + item.quantity, 0)
    ), [cart]);

    const childrenProp = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
    }), [cart, addToCart, clearCart, totalQuantity, removeFromCart]);

    return (
        <CartContext.Provider value={childrenProp}>
            {children}
        </CartContext.Provider>
    );
}