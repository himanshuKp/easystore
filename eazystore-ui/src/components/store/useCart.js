import {CartContext} from "./CartContext.js";
import {useContext} from "react";

/**
 * @typedef {Object} CartItem
 * @property {number} productId
 * @property {string} name
 * @property {number} quantity
 * @property {number} price
 * @property {string} imageUrl
 */

/**
 * Custom hook to consume the CartContext.
 * 
 * @returns {{
 *   cart: CartItem[],
 *   totalQuantity: number,
 *   addToCart: (product: Object, quantity: number) => void,
 *   removeFromCart: (productId: number) => void,
 *   clearCart: () => void
 * }}
 */
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart() must be used within CartProvider");
    }
    return context;
}