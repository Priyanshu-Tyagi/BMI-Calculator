import React from 'react'
import logo from '../Logo.jpg'

const data = [
    {
        to: "/bmi",
        title: "BMI Calculator"
    },
    {
        to: "/history",
        title: "History"
    },
    {
        to: "/signup",
        title: "Signup"
    },
    {
        to: "/login",
        title: "Login"
    },
]

const Navbar = () => {
    const logout = () => {
        localStorage.removeItem("token")
        window.location.reload();
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "70px" }}>
                <a href="/"><img width={"100%"} src={logo} alt="" /></a>
            </div>
            <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
                <div style={{ display: "flex" }}>
                    {data.map((i) => (
                        <div key={i.title} style={{ marginRight: "1rem" }}>
                            <a style={{ textDecoration: "none", color: "black" }} href={i.to}>
                                <h3>{i.title}</h3>
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={() => { logout() }}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar