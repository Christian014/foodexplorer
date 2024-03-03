import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

//auth routes
import { AuthRoutes } from "./routesUser/auth.routes";

//user logado
import { UserRoutes } from "./routesUser/pages.routes";

//rotas admin
import { AdminRoutes } from "./routesAdmin/routes.admin";


export function AppRoutes(){
    const { user } = useAuth()

    if(user){
        const userAuth = user.autenticacao
        console.log(userAuth)
    }
    
    
    
    return(

        
            <BrowserRouter>
                {
                    user ? (
                        <>
                            {user.autenticacao === "admin" ? (
                                <AdminRoutes />
                            ) : (
                                <UserRoutes />
                            )}
                        </>
                    ) : (
                        <AuthRoutes />
                    )
                }
            </BrowserRouter>
        
    )
        

    
}