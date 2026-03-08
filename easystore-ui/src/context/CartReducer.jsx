export const CART_ACTIONS = {
    ADD: "ADD_TO_CART",
    REMOVE: "REMOVE_FROM_CART",
    CLEAR: "CLEAR_CART",
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD: {
            const {product, quantity} = action.payload;
            const existingItem = state.find((item) => item.productId === product.productId);
            if (existingItem) {
                return state.map((item) =>
                    item.productId === product.productId ?
                        {...item, quantity: item.quantity + quantity} :
                        item
                );
            }
            return [...state, {...product, quantity}];
        }
        case CART_ACTIONS.REMOVE: {
            const {productId} = action.payload;
            return state.filter((item) => item.productId !== productId);
        }
        case CART_ACTIONS.CLEAR:
            return []
        default:
            return state;
    }
}