import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);



function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => console.log("SignIn SuccessFully"))
        .catch((error) => console.log(error))
    };


    return (
        <>
            <div className="SignIn">
            <h1>SignIn Page</h1>
               <label>Enter you Email</label><br /><br />
               <input onChange={(e) => setEmail(e.target.value)} value={email}  type="email"placeholder="Enter your Email" /><br />
               <label>Enter you Password</label><br /><br />
               <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your Password" /><br /><br/>
               <button onClick={SignInUser}>Sign In</button>
            </div>
        </>

    )
}

export default SignIn;