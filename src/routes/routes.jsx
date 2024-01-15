import { BrowserRouter } from "react-router-dom";





//login e cadastro user
import { AuthRoutes } from './routesUser/auth.routes';

//user logado
import { PagesRoutes } from "./routesUser/pages.routes";

//rotas admin
import { RoutesAdmin } from "./routesAdmin/routes.admin";


export function AppRoutes(){
    return(

        <BrowserRouter>
            <RoutesAdmin />
        </BrowserRouter>
        

    )
}