import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./RouteConstants";
import Home from "../pages/home/Home.jsx";
import Cart from "../pages/cart/Cart.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Navbar from "../components/shared/navbar/Navbar.jsx";
import Footer from "../components/shared/footer/Footer.jsx";
import Success from "../pages/success/Success.jsx";
import Cancel from "../pages/cancel/Cancel.jsx";
import Login from "../pages/login/Login.jsx";
import Privacy from "../pages/privacy/Privacy.jsx";
import TermServices from "../pages/termServices/TermServices.jsx";

const ReactRoute = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.contact} element={<Contact />} />
                <Route path={ROUTES.cart} element={<Cart />} />
                <Route path={ROUTES.success} element={<Success />} />
                <Route path={ROUTES.cancel} element={<Cancel />} />
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.privacy} element={<Privacy/> } />
                <Route path={ROUTES.termServices} element={<TermServices /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default ReactRoute;