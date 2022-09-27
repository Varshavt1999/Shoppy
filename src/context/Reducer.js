export const Reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
                // cart: [...state.cart, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };

        default:
            return state;
            break;
    }
};
