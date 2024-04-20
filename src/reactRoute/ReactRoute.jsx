import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./RouteConstants";

import Home from "../pages/home/Home.jsx";
import Cart from "../pages/cart/Cart.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Navbar from "../components/shared/navbar/Navbar.jsx";
import Footer from "../components/shared/footer/Footer.jsx";

const ReactRoute = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.contact} element={<Contact />} />
                <Route path={ROUTES.cart} element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default ReactRoute;