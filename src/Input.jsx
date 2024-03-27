import React from "react";

function Input(){
    return(
        <div className="d-flex justify-content-center border-1 rounded">
            <div className="my-3">
                <h2 className="text-center my-4"> Form</h2>
                <form>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="" name="first name" className="form-control"/>
                </form>
            </div>
          </div>
    );
}

export default Input;