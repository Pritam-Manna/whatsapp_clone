import LoginForm from "./LoginForm"
import SignUp from "./SignUp"
import {Routes, Route} from "react-router-dom"
function Login(){
    return(
        <div className="wrapper">
        <div className="logo">
            <img src="#" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Whatsapp
        </div>
        <Routes>
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    </div>
    )
}

export default Login