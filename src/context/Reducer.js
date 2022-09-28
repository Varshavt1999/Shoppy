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
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id === action.payload.id
                        ? (item.qty = action.payload.qty)
                        : (item.qty = item.qty)
                ),
            };
        case "SORT_BY_PRICE":
            return {
                ...state,
                sort: action.payload,
            };
        case "FILTER_BY_STOCK":
            return {
                ...state,
                byStock: !state.byStock,
            };
        case "FILTER_BY_DELIVERY":
            return {
                ...state,
                byFastDelivery: !state.byFastDelivery,
            };
        case "FILTER_BY_RATING":
            return {
                ...state,
                byRating: action.payload,
            };
        case "CLEAR_FILTER":
            return {
                ...state,
                sort: false,
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: "",
            };

        default:
            return state;
            break;
    }
};
