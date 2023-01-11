import React, {useState} from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signup = () =>{

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-6 text-left">
                    <form>
                        <div>
                            
                        </div>
                    </form>
                </div>

            </div>
        )
    }


    return (
        <Base title="Sign up page" description="A page for user to signup">
            <h1>Signup Works!</h1>
        </Base>
    );
};
export default Signup;