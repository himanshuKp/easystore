import {CART_ACTIONS, cartReducer} from "./CartReducer.js";
import {useCallback, useEffect, useMemo, useReducer} from "react";
import {CartContext} from "./CartContext";

const initialCartState = () => {
    try {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.log("Error creating cart", error);
        return [];
    }
};

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