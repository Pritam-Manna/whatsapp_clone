function FieldError(props){
    let error = null
    //console.log(props.error)
    if(props.error){
         error = <div className="text-danger">{props.error}</div>
    }
    console.log(error)
    return(error)
}

export default FieldError