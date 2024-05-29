import React from "react";

function Register() {
    return (
        <div className="bg-white px-10 py-10 rounded-3xl border-2">
            <h1 className="text-3xl text-center">Register here</h1>
            <div className="mt-3">
                <div>
                    <label className="text-lg " htmlFor="">First name :</label>
                    <input 
                        className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                        type="text"
                        placeholder="Enter your first name" 
                    />
                </div>
                <div>
                    <label className="text-lg " htmlFor="">Last name :</label>
                    <input 
                        className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                        type="text"
                        placeholder="Enter your last name" 
                    />
                </div>
                <div>
                    <label className="text-lg " htmlFor="">Email :</label>
                    <input 
                        className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                        type="text"
                        placeholder="Enter your email" 
                    />
                </div>
                <div>
                    <label className="text-lg " htmlFor="">Password :</label>
                    <input 
                        className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                        type="password"
                        placeholder="Enter your Password" 
                    />
                </div>
                <div>
                    <label className="text-lg " htmlFor="">Confirm password :</label>
                    <input 
                        className="w-full border-2 border-gray-100 p-3 mt-2 rounded-xl bg-transparent"
                        type="password"
                        placeholder="Enter your Password" 
                    />
                </div>
                <div className="flex m-5 gap-8 items-center justify-center ">
                    <button className="font-medium px-5 py-2 auto rounded-xl text-white bg-coli-100 active:scale-[.98] active:duration-75  transition-all">Register</button>
                    <button className="font-medium px-8 py-2 auto rounded-xl text-white bg-coli-100 active:scale-[.98] active:duration-75  transition-all">clear</button>
                </div>
            </div>
        </div>
    )
}

export default Register;