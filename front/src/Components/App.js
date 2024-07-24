import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyRoutes from '../Routes';



function App (){


    return (
        <>
            <Router>
                <MyRoutes />
            </Router>
        </>
    );
}
export default App;