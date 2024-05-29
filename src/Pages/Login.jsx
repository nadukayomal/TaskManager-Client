import React from "react";
import Form from "../Components/Form";
import Login_illustrate from "../assets/Login_illustrate.svg"
import Register from "../Components/Register";
 
function LogIn(params) {
    return (
        <div className="flex w-full h-screen">
            <div className="hidden lg:flex items-center justify-center lg:w-1/2 h-full ">
                <div className="flex flex-row">
                    <p className="text-5xl text-center justify-center">Task Master</p>
                    <img style={{width:"250px", height:"500px"}} src={Login_illustrate} alt="illustrate" />
                </div>
            </div>
            <div className="w-full flex items-center justify-center lg:w-1/2 bg-slate-100">
                {/* <Form/> */}
                <Register/>
            </div>
        </div>
    )
  };
  

export default LogIn;