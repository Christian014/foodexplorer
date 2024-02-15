import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({});

    async function signIn({email, password}){

        try{
            const response = await api.post("/login", {email, password});
            const {user, token} = response.data
            
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token})

            localStorage.setItem("@foodexplorer: token", token );
            localStorage.setItem("@foodexplorer: user", JSON.stringify(user) );
            
        }catch(error){
            if(error.response){

                alert(error.response.message.data);
            }else{
                alert("error")
            }
        }
    };

     function logOut(){
        localStorage.removeItem("@foodexplorer: token");
        localStorage.removeItem("@foodexplorer: user");

        setData({});
     }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer: user");
        const token = localStorage.getItem("@foodexplorer: token");

        if(user && token){
           api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    },[]);

    return(

        <AuthContext.Provider value={{
        signIn, 
        user: data.user,
        logOut
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context
}

export {AuthProvider, useAuth};