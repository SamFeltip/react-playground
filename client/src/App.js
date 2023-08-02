import React from "react"
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import States from "./pages/States";

import Sidebar from './components/Sidebar';


function App() {

    const sidebar_items = [
        "properties",
        "states",
        "something else"
    ]


    return (
        <div>
            <Sidebar items={sidebar_items}/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/properties"} element={<Properties />} />
                    <Route path={"/states"} element={<States />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;