import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

let currentUser = auth.currentUser;

export default function Login() {
    const navigator = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if (user) navigator('/account');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
        <div className="pageID">
            <div className="pgidline"></div>
            <p className="pgidname">Login</p>
        </div>
        <input 
            placeholder="email" 
            onChange={(event) => {
                setLoginEmail(event.target.value)
            }}
        />
    
        <input 
            placeholder="password"
            onChange={(event) => {
                setLoginPassword(event.target.value)
            }}
            />
        <button onClick={login}>Sign In</button>
        <Link to='/account/register'>Don't have an account? Register</Link>
        </>
    )
}