import Username from "./Username"
import Password from "./Password"
function LoginForm(){
    return(
        <>
        <form className="p-3 mt-3">
            <Username/>
            <Password/>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="/signup">Sign up</a>
        </div>
        </>
    )
}
export default LoginForm