import React from "react";
import { Routes, Route } from "react-router-dom";
import CartProducts from "../screens/CartProducts";
import Home from "../screens/Home";
import Index from "../screens/Index";
import Product from "../screens/Product";
import Products from "../screens/Products";

function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/cart" element={<CartProducts />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AppRouter;
