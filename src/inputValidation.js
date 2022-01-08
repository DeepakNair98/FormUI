export const inputValidation = (values) => {

    const errors = {}
    //Name validation
    if(!values.name){
        errors.name = "Name is required!"
    }

    //Email Validaton
    if(!values.email){
        errors.email = "Email is required!"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email is invalid"
    }

    //Mobile number validation
    if(!values.mobile){
        errors.mobile = "Mobile no. is required!"
    } else if(values.mobile.length!==10){
        errors.mobile = "Mobile no. is invaild"
    }

    return errors;
}

