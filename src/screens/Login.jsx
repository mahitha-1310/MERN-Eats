import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
    const[credentials, setCredentials] = useState({ email:"", password:""})

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({password:credentials.password, email:credentials.email})
        });

        const json = await response.json();


    if(!json.success){
        alert("Enter valid credentials")
    }

    if(json.success){
      navigate("/")
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
  }

    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name] : event.target.value})
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary bg-success">
          Submit
        </button>
        <Link to="/createuser" className="mx-3">New User? Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
