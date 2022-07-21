import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Axios from './Axios';
function MyApp() {
const {token} = Axios();

        return (
            <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home /> } />
                (if(!token){
               
                <Route path="/dashboard" element={<Home /> } />
})
                <Route path="/login" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
            </Routes>
            </>
        );
}
export default MyApp;


if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}