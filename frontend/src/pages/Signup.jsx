import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      name, email, password
    }
    fetch(`${process.env.REACT_APP_BASE}/signup`, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
  }

  return (
    <div>
      <h1>Sign up page</h1>
      <input type="text" placeholder='name' onChange={(e) => { setName(e.target.value) }} />
      <input type="email" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
      <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  )
}

export default Signup