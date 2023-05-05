import React from "react";

const Login=()=>{
    return (
        <div className="wrapper">
            <div className="container">
                <div className="header">
                    <h3>Create Account</h3>
                </div>
                <form action="">
                    <div className="un">
                        <label htmlFor="">Username</label> <br />
                        <input type="username" />
                    </div>
                    <div className="un">
                        <label htmlFor="">Email Address</label> <br />
                        <input type="email" />
                    </div>
                    <div className="un">
                        <label htmlFor="">Phone Number</label> <br />
                        <input type="number" />
                    </div>
                    <div className="un">
                        <label htmlFor="">Password</label> <br />
                        <input type="password" />
                    </div>
                    <div className="cb">
                        <input type="checkbox" /> Remember Me
                    </div>
                    <div className="un"><button>Create Account</button></div>
                </form>
            </div>
        </div>
    )
}

export default Login;