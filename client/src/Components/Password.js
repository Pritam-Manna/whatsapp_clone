import {useFormik} from 'formik'
import FieldError from './FieldError'
function Password(){
    const formik = useFormik({
        initialValues:{
            username: ''
        },
        validate: values=>{
            const errors = {}
            if(!values.password){
                errors.password = "Password is required"
            }
            return errors
        }
    })
    //console.log(formik.values.username)
    //console.log(formik.errors.username)
    return (
        <>
         <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" 
            name="password" 
            id="pwd" 
            placeholder="Password" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.password}/>
            <FieldError error={formik.errors.password}></FieldError>
        </div>
        </>
    )
}
export default Password;