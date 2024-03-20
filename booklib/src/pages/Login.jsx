import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

let currentUser = auth.currentUser;

export default function Login() {
    const navigator = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [err, setErr] = useState('');

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
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
                <p className="pgidname">Login</p>
            </div>

            <div className="logo">booklib.</div>

            <input
                type="email"
                className="loginemail"
                placeholder="Email..." 
                onChange={(event) => {
                    setLoginEmail(event.target.value)
                }}
            />

            <input
                type="password"
                className="loginpass"
                placeholder="Password..."
                onChange={(event) => {
                    setLoginPassword(event.target.value)
                }}
                />
            <button onClick={login} className="signin">Sign In</button>

            <p className="rerg">Don't have an account? <Link to='/account/register'>Register</Link></p>

            <div className="errorDisplay">{err}</div>
        </div>
    )
}