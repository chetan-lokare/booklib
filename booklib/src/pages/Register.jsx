import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Register() {
    const navigator = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            if (user) navigator('/account');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
        <div className="pageID">
            <div className="pgidline"></div>
            <p className="pgidname">Register</p>
        </div>
        <input 
            placeholder="email" 
            onChange={(event) => {
                setRegisterEmail(event.target.value)
            }}
        />
        
        <input 
            placeholder="password" 
            onChange={(event) => {
                setRegisterPassword(event.target.value)
            }}
        />
        <button onClick={register}>Create User</button>

        <Link to='/account/login'>Have an account? Log In</Link>
        </>
    );
}