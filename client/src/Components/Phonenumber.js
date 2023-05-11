import {useFormik} from 'formik'
import FieldError from './FieldError'
function Phonenumber(){
    const formik = useFormik({
        initialValues:{
            phonenumber: ''
        },
        validate: values=>{
            const errors = {}
            if(!values.phonenumber){
                errors.phonenumber = "Phone number is required"
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
                <input type="tel" 
                name="phonenumber" 
                id="userName" 
                placeholder="Phone Number" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.phonenumber}/>
                <FieldError error={formik.errors.phonenumber}></FieldError>
        </div>
        </>
    )
}
export default Phonenumber;