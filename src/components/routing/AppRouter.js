import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../screens/Index";

function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />}></Route>
            </Routes>
        </div>
    );
}

export default AppRouter;
