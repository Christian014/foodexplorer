import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Home } from '../pages/home';
import { Dish } from '../pages/dish';
import { SignIn } from '../pages/signIn/index';
import { SignUp } from '../pages/signUp/index';
import { MenuUser } from '../pages/menuUser';



export function AppRoutes(){
    return(

        <Router>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="dish" element={<Dish />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="menuUser" element={<MenuUser />} />
        </Routes>
        
        </Router>

    )
}