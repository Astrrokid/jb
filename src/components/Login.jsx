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
                        <label htmlFor="">Username</label>
                        <input type="username" />
                    </div>
                    <div className="un">
                        <label htmlFor="">Email Address</label>
                        <input type="email" />
                    </div>
                    <div className="un">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" />
                    </div>
                    <div className="un">
                        <label htmlFor="">Password</label>
                        <input type="passsword" />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;