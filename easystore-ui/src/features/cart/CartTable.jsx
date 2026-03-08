import {useCart} from "../../hooks/useCart.jsx";
import {Link} from "react-router-dom";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * CartTable component renders the items currently in the shopping cart.
 * Uses `useCart` hook for state management (addToCart, removeFromCart).
 *
 * @component
 * @returns {import('react').JSX.Element} The rendered cart table.
 */
export default function CartTable() {
    /**
     * @typedef {Object} CartItem
     * @property {number} productId
     * @property {string} name
     * @property {number} quantity
     * @property {number} price
     * @property {string} imageUrl
     */

    /** @type {{ cart: CartItem[], addToCart: Function, removeFromCart: Function }} */
    const {cart, addToCart, removeFromCart} = useCart();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);

    const updateCartQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        const product = cart.find((item) => item.productId === productId);
        if (product) {
            addToCart(product, quantity - product.quantity)
        }
    }

    return (
        <div className="min-h-80 max-w-4xl mx-auto my-8 w-full font-primary">
            <table className="w-full">
                <thead>
                <tr className="uppercase text-sm text-primary dark:text-light border-b border-primary dark:border-light">
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Quantity</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Remove</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-primary dark:divide-light">
                {cart.map((item) => (
                    <tr
                        key={item.productId}
                        className="text-sm sm:text-base text-primary dark:text-light text-center"
                    >
                        <td className="px-4 sm:px-6 py-4 flex items-center">
                            <Link
                                to={`/products/${item.productId}`}
                                state={{product: item}}
                                className="flex items-center"
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-md object-cover mr-4 hover:scale-110 transition-transform"
                                />
                                <span className="text-primary dark:text-light hover:underline">
                                    {item.name}
                                </span>
                            </Link>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center">
                            <input
                                type={"number"}
                                inputMode={"numeric"}
                                value={item.quantity}
                                onChange={(event) => {
                                    updateCartQuantity(item.productId, parseInt(event.target.value, 10) || 1)
                                }}
                            />
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-base font-light">
                            ${item.price.toFixed(2)}
                        </td>
                        <td className={"ps-4 sm:px-6 py-4"}>
                            <button
                                aria-label={"delete-item"}
                                onClick={() => removeFromCart(item.productId)}
                                className="text-primary dark:text-red-400 border border-primary dark:border-red-400 p-2 rounded hover:bg-lighter dark:hover:bg-gray-700"
                            >
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </td>
                    </tr>
                ))}
                {cart.length > 0 && (
                    <tr className="text-center">
                        <td></td>
                        <td className="text-base text-gray-600 dark:text-gray-300 font-semibold uppercase px-4 sm:px-6 py-4">
                            Subtotal
                        </td>
                        <td className="text-lg text-primary dark:text-blue-400 font-medium px-4 sm:px-6 py-4">
                            ${subtotal}
                        </td>
                        <td></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}