import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
export default class Login extends Component {
   
    constructor(props){
        super(props);
        this.state={
          email:"",
          password:""
        }
      }
  
    handleInput = (e)=>{
        //console.log(e);
        //this.setState({email:e.target.value,password:e.target.value});
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = async(e)=>{
        e.preventDefault();
        const {email,password}=this.state
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Invalid Email")
        }
        const res = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })
        const data = await res.json()
        if(data.status===422 || !data){
            alert("inavlid")
            console.log("invalid data");
        }else{
            alert("valid")
            console.log("valid data");
            this.props.history.push("/welcome");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" 
                        name="email" 
                        class="form-control" 
                        value={this.state.email}
                        onChange={this.handleInput}
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleInput}
                        class="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"/>
                    </div>   
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
