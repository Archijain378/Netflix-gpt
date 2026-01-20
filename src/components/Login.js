import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login =()=>{

    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const handleToggle =()=>{
        setIsSignForm(!isSignForm);
    }

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleButtonClick =(e)=>{
        e.preventDefault();
        console.log(email.current.value)
        console.log(password.current.value)
        setErrorMessage(checkValidData(email.current.value, password.current.value, name.current.value))
    }
    return(
        <div className="relative"> 
            <Header />
            <div>
                <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg" alt="bg-img"/>

            </div>
            <form className="w-3/12 absolute p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 text-white rounded-lg">
                <h1 className="text-3xl font-bold py-6 px-4">{isSignForm ? "sign In" : "sign up"}</h1>
                {!isSignForm &&<input type="text" ref= {name} placeholder="Full Name" className="p-2 m-4 w-full bg-gray-700"/>}
                <input type ="text" ref={email} placeholder="Email address" className="p-2 m-4 w-full bg-gray-700"/>
                <input type="password" ref={password}placeholder="Password" className="p-2 m-4 w-full bg-gray-700"/>
                <p className="text-red-500 font-bold mx-6">{errorMessage}</p>
                <button className="bg-red-600 p-2 m-4 rounded w-full rounded-lg" onClick={handleButtonClick}>{isSignForm ? "Sign In" : "sign Up"}</button>
                <p className="mx-6 cursor-pointer" onClick={handleToggle}>{isSignForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In now"}</p>
            </form>
        </div>
    )
}

export default Login;