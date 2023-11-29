//importing
import React from "react";

//function
const Registerpage = () =>{
    return((
        <>
            <h1 className ='m-3'>Create an Account!</h1>

            <form  className="m-3 w-100">
                <label>FirstName</label>
                <input className ='form-control mb-2' type="text" placeholder="Enter your name"></input>

                <label>LastName</label>
                <input className ='form-control mb-2' type="text" placeholder="Enter your name"></input>

                <label>Email</label>
                <input className ='form-control mb-2' type="text" placeholder="Enter your name"></input>

                <label>Password</label>
                <input className ='form-control mb-2' type="text" placeholder="Enter your name"></input>


                <button className="btn btn-danger w-100">
                    Submit
                </button>
               
            </form>
        </>
    ))
}


//export default
export default Registerpage;