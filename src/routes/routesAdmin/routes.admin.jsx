import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { MenuAdmin } from "../../pagesAdmin/menuAdmin/index";
import { HomeAdmin } from "../../pagesAdmin/homeAdmin";


import { DishCustomAdmin } from "../../pagesAdmin/dishCustomAdmin";
import { DishNewAdmin } from "../../pagesAdmin/dishNewAdmin";
import { DishAdmin } from "../../pagesAdmin/dishAdmin";


export function AdminRoutes(){
    return(

        <Routes>
            <Route path="/menuAdmin" element={<MenuAdmin />} />
            <Route path="/dishCustomAdmin" element={<DishCustomAdmin />} />
            <Route path="/dishNewAdmin" element={<DishNewAdmin />} />
            <Route path="/dishAdmin" element={<DishAdmin />} />
            

            <Route path="/" element={<HomeAdmin/>} />
        </Routes>
        
    )
}