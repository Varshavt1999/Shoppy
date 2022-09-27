export const Reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };

        default:
            return state;
            break;
    }
};
