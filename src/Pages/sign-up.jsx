import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('')
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || "/"
  const {signUpUser} = useContext(DataContext)
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const newUserDetails = {firstName,lastName,email,pass}
    console.log(newUserDetails)
    signUpUser(newUserDetails)
    setEmail('')
    setPass('')
    setFirstName('')
    setLastName('')
    navigate(redirectPath,"/")
  }
  return (
    <div>
      <div className='signup-form'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="first-name" className="form-label">First Name</label>
    <input type="text" id="first-name" className="form-input" value = {firstName} onChange={handleFirstNameChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="last-name" className="form-label">Last Name</label>
    <input type="text" id="last-name" className="form-input" required
        value = {lastName} onChange={handleLastNameChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" id="email" className="form-input" required
        value = {email} onChange={handleEmailChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" id="password" className="form-input" required
        value = {pass} onChange={(handlePasswordChange)}
    />
  </div>
 
  <button type="submit" className="form-button">Signup</button>
</form>

  </div>
      </div>
    
  )
}

export default SignUp
