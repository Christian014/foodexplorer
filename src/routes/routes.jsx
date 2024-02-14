import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

//auth routes
import { AuthRoutes } from "./routesUser/auth.routes";

//user logado
import { UserRoutes } from "./routesUser/pages.routes";

//rotas admin
import { adminRoutes } from "./routesAdmin/routes.admin";


export function AppRoutes(){
    const { user } = useAuth()
    return(

        <BrowserRouter>
            {user ? <UserRoutes/> : <AuthRoutes />}
        </BrowserRouter>
        

    )
}