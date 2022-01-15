import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Home from "./components/home/Home";

function App() {
    return (
        <div className="Main">
            <Header/>
            <div className="Main_container">
                <Home/>
            </div>
        </div>
    );
}

export default App;