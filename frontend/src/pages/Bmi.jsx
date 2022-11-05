import React, { useState } from 'react'

const BmiCalculator = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const token = localStorage.getItem("token") || null;
  const handleSubmit = () => {
    const payload = {
      height, weight
    }
    fetch("http://localhost:6969/calculateBMI", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  if (token) {
    return <div>
      <h1>BMI Calcution Page</h1>
      <input type="number" placeholder='height' onChange={(e) => { setHeight(e.target.value) }} />
      <input type="number" placeholder='weight' onChange={(e) => { setWeight(e.target.value) }} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  } else {
    return <h1>Please Login</h1>
  }
}

export default BmiCalculator