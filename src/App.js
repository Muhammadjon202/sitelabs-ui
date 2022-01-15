import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Home from "./components/home/Home";
import Content from "./components/Content/Content";

function App() {
    return (
        <div>
            <Header/>
            <div className="Main">
                <div className="Main_container">
                    <Home/>
                </div>
            </div>
            <Content/>
        </div>

    );
}

export default App;