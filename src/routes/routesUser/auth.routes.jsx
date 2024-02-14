import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignIn } from '../../pages/signIn/index';
import { SignUp } from '../../pages/signUp/index';


export function AuthRoutes(){
    return(

        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
        
    )
}