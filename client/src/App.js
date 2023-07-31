import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/properties";

import Sidebar from './components/Sidebar';


function App() {

    const sidebar_items = [
        "properties",
        "classes",
        "something else"
    ]


    return (
        <div>
            <Sidebar items={sidebar_items}/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/properties"} element={<Properties />} />

                </Routes>


            </BrowserRouter>
        </div>
    )
}

export default App;