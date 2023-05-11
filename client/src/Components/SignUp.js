import Username from "./Username"
import Password from "./Password"
import Phonenumber from "./Phonenumber"

function SignUp(){
    return(
        <>
        <form className="p-3 mt-3">
            <Username/>
            <Password/>
            <Phonenumber/>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            Have an account! <a href="/login">Login</a>
        </div>
        </>
    )
}
export default SignUp