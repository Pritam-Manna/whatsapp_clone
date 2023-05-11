import {useFormik} from 'formik'
import FieldError from './FieldError'
function Username(){
    const formik = useFormik({
        initialValues:{
            username: ''
        },
        validate: values=>{
            const errors = {}
            if(!values.username){
                errors.username = "Username is required"
            }
            return errors
        }
    })
    //console.log(formik.values.username)
    //console.log(formik.errors.username)
    return (
        <>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
                <input type="text" 
                name="username" 
                id="userName" 
                placeholder="Username" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.username}/>
                <FieldError error={formik.errors.username}></FieldError>
        </div>
        </>
    )
}
export default Username;