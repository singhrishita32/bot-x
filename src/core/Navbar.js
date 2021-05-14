import React from "react";
import logo from './logo.png'

const Navbar= () => (
    <div>
        <div className="d-flex flex-column flex-md-row align items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" >
            <h5 className="my-0 mr-md-auto font-weight-heavy">BOTX</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <button className="p-2 text-dark"
                    value="signup"
                    style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }} >SIGNUP</button>
                <button className="p-2 text-dark"
                value="home"
                    style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }}>HOME</button>
                <button className="p-2 text-dark"
                    value="about us"
                    style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }}>ABOUT US</button>
                <button className="p-2 text-dark"
                    value="services"
                    style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }}>SERVICES</button>
            </nav>
        </div>
        <img src={logo} style={{ width: "100px", height: "20" }} alt="BOTX"></img>
    </div>
);
export default Navbar;