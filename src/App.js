import React from 'react';

import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import Detail from "./components/Detail";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
        <>
        <Header/>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            </>
    </div>
  );
}

export default App;
