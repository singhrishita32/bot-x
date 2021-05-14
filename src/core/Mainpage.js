import React, { Component } from 'react';
import Intro from './Intro'
import Footer from './Footer'
import ForTeachers from './ForTeachers'
import ForStudents from './ForStudents'
import logo from './logo.png'
import Signup from "../core/Signup";

class Mainpage extends Component{
    constructor() {
        super()
        this.state = {
            op:false
        }
    }    
    render() {
        const {op} = this.state
        return(
            <div>
                
                <div className="d-flex flex-column flex-md-row align items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" >
                    <h5 className="my-0 mr-md-auto font-weight-heavy">BOTX</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <button className="p-2 text-dark"
                            onClick={()=>{this.setState({op:true})}}
                            style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }} >SIGNUP</button>
                        <button className="p-2 text-dark"
                            onClick={()=>{this.setState({op:false})}}
                            style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }}>HOME</button>
                        <button className="p-2 text-dark"
                            onClick={()=>{this.setState({op:false})}}
                            style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }}>ABOUT US</button>
                        <button className="p-2 text-dark"
                            onClick={()=>{this.setState({op:false})}}
                            style={{ borderColor: "white", borderWidth: "3px", background: "orange", padding: "2px" }}>SERVICES</button>
                    </nav>
                </div>
                
                <img src={logo} style={{ width: "100px", height: "20" }} alt="BOTX"></img>
                {op  && <Signup></Signup>}
                {!op && <div> <Intro></Intro> <ForStudents></ForStudents>  <ForTeachers></ForTeachers>  <Footer></Footer> </div>}
            </div>
        )
    }
}
export default Mainpage;