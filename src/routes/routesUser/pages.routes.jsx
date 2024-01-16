import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Home } from '../../pages/home';
import { Dish } from '../../pages/dish';
import { MenuUser } from '../../pages/menuUser';
import { SignIn } from '../../pages/signIn';
import { SignUp } from '../../pages/signUp';



export function PagesRoutes(){
    return(


        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="dish" element={<Dish />} />
            <Route path="menuUser" element={<MenuUser />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            
        </Routes>
        

    )
}