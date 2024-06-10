import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


function Register() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comPassword, setComPassword] = useState("")
    const [passError, setPassError] = useState("")

    const dataSubmitUrl = "http://localhost:5000/users"


    const handleClick = async (event) => {

        event.preventDefault();

        const isDataEmpty = (firstName == "" || lastName == "" || email == "" || password == "" || comPassword == "");
        const isMatchPassword = (password === comPassword);
        const isCharacter = (fName, lName) => {
            const validName = (string) => /^[A-Za-z]+$/.test(string);
            return validName(fName) && validName(lName);
        };

        // check all input are filled and password is match
        if (!isDataEmpty && isMatchPassword && isCharacter(firstName, lastName)){
            // condition is true data is submit to url 
            try {
                const submitData = {
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    password : password
                };
                await axios.post(dataSubmitUrl, submitData);
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        } else {
            // check error which fides are empty 
            if (!isMatchPassword) {
                setPassError("Password is not match");
            }
        }
    }


    return (
        <div className="bg-white px-10 py-10 rounded-3xl border-2">
            <h1 className="text-3xl text-center">Register here</h1>
            <form onSubmit={handleClick} id="regForm">
                <div className="mt-3">
                    <div>
                        <label className="text-lg " htmlFor="">First name :</label>
                        <input 
                            className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                            type="text"
                            placeholder="Enter your first name" 
                            name="firstName"
                            value={firstName}
                            onChange={(inpFirstName)=>{
                                setFirstName(inpFirstName.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-lg " htmlFor="">Last name :</label>
                        <input 
                            className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                            type="text"
                            placeholder="Enter your last name" 
                            name="lastName"
                            value={lastName}
                            onChange={(inpLastName)=>{
                                setLastName(inpLastName.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-lg " htmlFor="">Email :</label>
                        <input 
                            className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(inpEmail)=>{
                                setEmail(inpEmail.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-lg " htmlFor="">Password :</label>
                        <input 
                            className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                            type="password"
                            placeholder="Enter your Password" 
                            name="password"
                            value={password}
                            onChange={(inpPassword)=>{
                                setPassword(inpPassword.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-lg " htmlFor="">Confirm password :</label>
                        <input 
                            className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                            type="password"
                            placeholder="Enter your Password" 
                            name="comPassword"
                            value={comPassword}
                            onChange={(inpComPassword)=>{
                                setComPassword(inpComPassword.target.value)
                            }}
                        />
                        <p style={{color:"red"}}>{passError}</p>
                    </div>
                    <div className="flex m-5 gap-8 items-center justify-center ">
                        <button 
                            className="font-medium px-5 py-2 auto rounded-xl text-white bg-coli-100 active:scale-[.98] active:duration-75  transition-all"
                            type="submit"
                        >
                            Register
                        </button>
                        <button 
                            className="font-medium px-8 py-2 auto rounded-xl text-white bg-coli-100 active:scale-[.98] active:duration-75  transition-all"
                            type="reset"
                            onClick={()=>{
                                window.location.reload();
                            }}
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;