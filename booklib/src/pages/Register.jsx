import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

export default function Register() {
    const navigator = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [err, setErr] = useState('');

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            if (user) navigator('/account');
            window.location.reload();
        } catch (error) {
            setErr(error)
        }

    }

    return (
        <div className="form">
            <div className="pageID">
                <div className="pgidline"></div>
                <p className="pgidname">Register</p>
            </div>

            <div className="logo">booklib.</div>

            <input
                type="email"
                className="registeremail"
                placeholder="Email..." 
                onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }}
            />

            <input
                type="password"
                className="registerpass"
                placeholder="Password..." 
                onChange={(event) => {
                    setRegisterPassword(event.target.value)
                }}
            />
            <button onClick={register} className="register">Sign Up</button>

            <p className="relg">Already have an account? <Link to='/account/login'>Login</Link></p>

            <div className="errorDisplay">{err}</div>
        </div>
    );
}