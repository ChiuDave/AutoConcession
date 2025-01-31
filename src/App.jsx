import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'
import Accueil from './composants/Accueil';
import Dashboard from './composants/Dashboard';
import Details from './composants/Details';

function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/details/:id" element={<Details />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
