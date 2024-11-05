import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value =>
            alert("Success"));
    };

    return (
        <>
            <div className="signup-page">
                <h1>SignUp Page</h1>
                <label>Email</label><br /><br />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter your Email" required /><br /><br />
                <label>Password</label><br /><br />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your Password" required /><br /><br />
                <button onClick={createUser}>SignUp</button><br /><br />
            </div>
        </>
    )
}

export default SignUp;