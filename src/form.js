import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './form.css';
import {inputValidation} from './inputValidation';

const Form = () => {

    const [User, setUser] = useState({
        name: "",
        email: "",
        mobile: ""
    });
   console.log(inputValidation); 
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name+":"+value);

        setUser({... User, [name]:value });
    }

    const url = "http://localhost:8080/FormAPI/saveData"
    const params = JSON.stringify({
        "name": User.name,
        "email": User.email,
        "mobile": User.mobile
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(inputValidation(User));
        setIsSubmit(true);
        axios.post(
            url,
            params,
            {
                "headers":{
                    "content-type": "application/json",
                },
            }
        )
        .then( function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    };

    useEffect(() => {
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(User);
        }
    }, [errors]);
    return (
        <>
            <div className='container'>


                <form action="" onSubmit={handleSubmit}>
                        <div className='label-item'>
                        <label htmlFor="name">Name</label>
                        </div>
                        <input 
                            type="search" 
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            autoComplete="off"
                            value={User.name}
                            onChange= {handleInput}
                        />
                        <p>{errors.name}</p>
                    
                        <div className='label-item'>
                        <label htmlFor="email">Email</label>
                        </div>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            value={User.email}
                            onChange= {handleInput}
                        />
                        <p>{errors.email}</p>
                    
                        <div className='label-item'>
                        <label htmlFor="mobile">Mobile</label>
                        </div>
                        <input 
                            type="text" 
                            name="mobile"
                            id="mobile"
                            placeholder="Enter your mobile no."
                            autoComplete="off"
                            value={User.mobile}
                            onChange= {handleInput}
                        />
                        <p>{errors.mobile}</p>
                    <div className='btn-submit'>
                    <button  type="submit">Submit</button>
                    </div>
                    <div  className='success'>
                    {Object.keys(errors).length === 0 && isSubmit?(
                
                    "Form submitted successfuly !!!"
                ):""}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
