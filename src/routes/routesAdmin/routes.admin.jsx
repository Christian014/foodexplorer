import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MenuAdmin } from "../../pagesAdmin/menuAdmin/index";
import { HomeAdmin } from "../../pagesAdmin/homeAdmin";


import { DishCustomAdmin } from "../../pagesAdmin/dishCustomAdmin";
import { NewDishAdmin } from "../../pagesAdmin/newDishAdmin"

//auth
import { SignIn } from "../../pages/signIn";
import { SignUp } from "../../pages/signUp";


export function RoutesAdmin(){
    return(

        <Routes>
            <Route path="menuAdmin" element={<MenuAdmin />} />
            <Route path="dishCustomAdmin" element={<DishCustomAdmin />} />
            <Route path="newdishadmin" element={<NewDishAdmin />} />
            
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="/" element={<HomeAdmin/>} />
        </Routes>
        
    )
}