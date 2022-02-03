import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import NotFound from "../components/NotFound";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route component={NotFound} /> 
        </Routes>
    </BrowserRouter>
);

export default Router;