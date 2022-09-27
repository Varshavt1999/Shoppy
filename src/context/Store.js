import React, { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const cartContext = createContext(); //name of our context or state

function Store({ children }) {
    const initialState = {
        products: [],
        cart: [],
    };
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
}

export default Store;
export const CartState = () => {
    return useContext(cartContext);
};
