import React, { useState,useContext } from 'react'
import { DataContext } from '../Context/DataContext';
import { useLocation, useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || "/"
  const {login} = useContext(DataContext)
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userCred = {email,password}
    login(userCred)
    setEmail('')
    setPassword('')
    navigate(redirectPath,{replace:true})
  }
  return (
      <div className='form-container'>
       <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required/>
      </div>
      <button className="button-back" type="button" onClick={()=> {navigate("/")}}>Back to Home</button>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
    
  


export default LoginPage
