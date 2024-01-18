import { BrowserRouter } from "react-router-dom";







//user logado
import { PagesRoutes } from "./routesUser/pages.routes";

//rotas admin
import { RoutesAdmin } from "./routesAdmin/routes.admin";


export function AppRoutes(){
    return(

        <BrowserRouter>
            <PagesRoutes />
        </BrowserRouter>
        

    )
}