import React, {Component} from 'react'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            open:false
        }
    }

    handleChange = (str) => (event) => {
        this.setState({ error: "" ,open:false});
        this.setState({
            [str]: event.target.value
        });
    };

    clickSubmit = (event) => {
        event.preventDefault();
        this.setState({
            error: "",
            name: "",
            email: "",
            password: "",
            open:true
        });
    };
    
    signupForm = (name, email, password) => (
        <form>
                    <div className="form-group" >
                        <label className="text-muted">Name</label>
                        <input 
                            onChange = {this.handleChange("name")} 
                            type = "text" 
                            className = "form-control"
                            value = {name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            onChange = {this.handleChange("email")} 
                            type = "email" 
                            className = "form-control"
                            value = {email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input 
                            onChange = {this.handleChange("password")} 
                            type = "password" 
                            className = "form-control"
                            value = {password}>
                        </input>   
                    </div>
            <button onClick={this.clickSubmit} style={{ backgroundColor: "orange" }} className="btn btn-raised btn-primary">Submit</button>
                </form>
          
    )

    render() {
        const { name, email, password, error, open } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Signup</h2>

                <div className="alert alert-danger" style={{display:error?"":"NONE"}}>
                    {error}
                </div>

                <div className="alert alert-info" style={{display:open?"":"none"}}>
                    New Account is Successfully Created!
                </div>
                {this.signupForm(name,email,password)}    
            </div>
        );
    };
};

export default Signup;