import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

export default function Login() {
  const [inputs, setInputs] = useState({});

  const handleSignupClick = () => {
    console.log('Clicked');
    document.location.href = '/signup';
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>

    <h2>Login Below</h2>

    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label className="label">
            <span className="label-text text-primary">Username: </span>
          </label>
        </div>

        <div>
            <input
              type="text"
              name="username"
              value={inputs.username || ''}
              placeholder="Enter username here"
              className="input bg-secondary input-bordered w-full max-w-xs"
              onChange={handleChange}
            />
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Password: </span>
          </label>
        </div>

        <div>
            <input
              type="text"
              name="password"
              value={inputs.password || ''}
              placeholder="Enter password here"
              className="input bg-secondary input-bordered w-full max-w-xs"
              onChange={handleChange}
            />
        </div>
          <div style={{marginTop: 10}}>
            <span className="label-text text-primary">Need and account? </span>
            <span
              className="label-text text-primary"
              onClick={handleSignupClick}
            >
              Sign Up
            </span>
          </div>


        <div style={{marginTop: 40}}>
            <span className="label-text text-primary">
              Or sign in with Google
            </span>
        </div>




        <div style={{marginTop: 40, marginBottom: 40}}>
          <input type="submit" className="btn" value='Login'/>
        </div>

      </form>
    </div>


    </div>
  )
}