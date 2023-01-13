import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import Base from "../core/Base";
import {signin, authenticate, isAuthenticated} from "../auth/helper/index"
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const Signin = () =>{

    const [values, setValues] = useState({
        email : "d@gmail.com",
        password: "12345",
        error: "",
        loding: false,
        didRedirect: false,
    });

    const{email, password, error, loading, didRedirect} = values
    const {user} = isAuthenticated();

    const handleChange = name  => event =>{
        setValues({...values, error: false, [name]: event.target.value})
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading:true})
        signin({email, password})
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error, loading:false})
            }
            else{
                authenticate(data, ()=>{
                    setValues({
                        ...values,
                        didRedirect: true
                    })
                })
            }
        })
        .catch(console.log("Signin reaquest failed!"))
    }

    const perfromRedirect = () => {
        if(didRedirect){
            if(user && user.role === 1){
                return <p>Redirect to admin!</p>
            }
            else{
                return <p>redirect to user dashboard</p>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/"/>;
        }
    }   

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading is happening</h2>
                </div>
            )
        )
    };
   
       const errorMessage = () => {
        return(
           <div className="row">
           <div className="col-md-6 offset-sm-3 text-start">
           <div className="alert alert-danger"
           style={{display: error ? "" : "none"}}
           >
               {error}
           </div> 
           </div> 
           </div> 
   
        );
       };

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-start">
                    <form>
                      
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} value= {email} className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password" />
                        </div>
                        <br/>
                        <button onClick = {onSubmit} className="btn btn-success col-12">Submit</button>
                    </form>
                </div>

            </div>
        )
    }



    return (
        <Base title="Signin page" description="A page for user to sign in">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {perfromRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}
export default Signin;