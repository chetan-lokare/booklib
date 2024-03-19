import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

export default function Account() {
    const [user, setUser] = useState({});
    let Component;
    const navigate = useNavigate();


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {setUser(currentUser)});
    }, [])

    const logout = async () => {
        await signOut(auth);
    }

    if (!user) {
        navigate('/account/register')
    } else if (user) {
        Component = (
            <>
            <p className="details">
                User Details
                <p className="detemail">User email: {user?.email}</p>
            </p>
            

            <button onClick={logout} className="signout">Sign Out</button>
            </>
        )
    }

    return (
        <>
        <div className="pageID">
            <div className="pgidline"></div>
            <p className="pgidname">Account</p>
        </div>

        {Component}
        </>
    )
}