import React, {useState} from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signin = () =>{

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-start">
                    <form>
                      
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <br/>
                        <button className="btn btn-success col-12">Submit</button>
                    </form>
                </div>

            </div>
        )
    }



    return (
        <Base title="Signin page" description="A page for user to sign in">
            {signInForm()}
        </Base>
    )
}
export default Signin;