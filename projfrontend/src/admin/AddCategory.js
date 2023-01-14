import React, {useState} from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";



const AddCategory = () =>{

    const [name, setName] = useState("initialState")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    
    const {user, token} = isAuthenticated()
    

    const goBack = () => {
        return(
            <div className="mt-5">
                <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
            </div>
        )
    }

    const myCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <input type="text" className="form-control my-3" autoFocus required placeholder="For ex. Summer" />
                <button className="btn btn-outline-info mb-2">Create Category</button>
            </div>
        </form>
    );

   return(
        <Base title="Create a category" description="Add a new category" className="container bg-info p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>

        </Base>
   );
};


export default AddCategory;