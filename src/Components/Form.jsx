import React from "react";

function Form() {
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2">
            <h1 className="text-5xl">Welcome back</h1>
            <p className="font-medium text-lg">Please enter your details</p>
            <div className="mt-2">
                <div>
                    <label className="text-lg font-medium" htmlFor="">User name :</label>
                    <input 
                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label className="text-lg font-medium" htmlFor="">Password :</label>
                    <input  
                        className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent"
                        placeholder="Enter your password"
                        type="password"
                    />
                </div>
                <div className="mt-8 flex">
                    <button className="font-medium text-base text-purple-400">Forget password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button 
                        className=" py-3 bg-coli-100 text-white text-lg font-bold rounded-xl active:scale-[.98] active:duration-75  transition-all"
                    >
                        Sign in
                    </button>
                    <button className="flex items-center gap-2 justify-center  text-lg  rounded-xl active:scale-[.98] active:duration-75  transition-all">
                        <img className="h-10" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google icon" />
                        Sign in with Google
                    </button>
                    <div className="mt-3 flex justify-center items-center">
                        <p className="font-medium text-base">Don't have an account?</p>
                        <button className="text-violet-500">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;