import React, { createContext, useContext, useReducer } from "react";
import { filterReducer, Reducer } from "./Reducer";

const cartContext = createContext(); //name of our context or state

function Store({ children }) {
    const initialState = {
        products: [],
        cart: [],
    };
    const filterInitialState = {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    };
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [filterState, filterDispatch] = useReducer(
        filterReducer,
        filterInitialState
    );
    return (
        <cartContext.Provider
            value={{ state, dispatch, filterState, filterDispatch }}
        >
            {children}
        </cartContext.Provider>
    );
}

export default Store;
export const CartState = () => {
    return useContext(cartContext);
};
