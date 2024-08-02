import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Dashboard from '../Components/Dashboard';
function MyRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Dashboard />} />
        
        </Routes>
    )
}
export default MyRoutes;