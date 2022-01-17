import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import Home from "./components/home/Home";
import About from "./components/About/About";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" exact={true} element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;