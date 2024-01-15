import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MenuAdmin } from "../../pagesAdmin/menuAdmin/index";
import { HomeAdmin } from "../../pagesAdmin/homeAdmin";
import { NewDishAdmin } from "../../pagesAdmin/newDishAdmin";


export function RoutesAdmin(){
    return(

        <Routes>
            <Route path="menuAdmin" element={<MenuAdmin />} />
            <Route path="newDishAdmin" element={<NewDishAdmin />} />
            <Route path="/" element={<HomeAdmin/>} />
        </Routes>
        
    )
}