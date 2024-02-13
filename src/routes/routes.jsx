import { BrowserRouter } from "react-router-dom";

//auth routes
import { AuthRoutes } from "./routesUser/auth.routes";

//user logado
import { userRoutes } from "./routesUser/pages.routes";

//rotas admin
import { adminRoutes } from "./routesAdmin/routes.admin";


export function AppRoutes(){
    return(

        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
        

    )
}