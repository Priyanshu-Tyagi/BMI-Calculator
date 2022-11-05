import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const payload = {
            email, password
        }
        fetch("http://localhost:6969/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                localStorage.setItem("token",res.token);
            })
    }

    return (
        <div>
            <h1>Login page</h1>
            <input type="email" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login