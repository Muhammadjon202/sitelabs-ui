import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import Home from "./components/Home/Home";
import Services from "./components/pages/Services/Services";
import About from "./components/About/About";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" exact={true} element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
        </div>
    );
}

// window.onload = () => {
//   window.scrollTo({top: 0, behavior: "smooth"})
// };

export default App;