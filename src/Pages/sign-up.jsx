import React, { useContext, useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('')
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPass,setConfirmPass] = useState('')
    const [passwordCheckStatus,setPasswordCheckStatus] = useState(false)
    const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || "/"
  const {signUpUser} = useContext(DataContext)
  const defaultProfileImages = ["https://th.bing.com/th/id/OIG.oOsKk2CZ1YDnzZwwr2zD?pid=ImgGn","https://th.bing.com/th/id/OIG.a_XVthbb9rAVgNAsnOmB?pid=ImgGn","https://th.bing.com/th/id/OIG.SYqn6aD_p7_f4blRnffX?pid=ImgGn","https://th.bing.com/th/id/OIG.pAIyHxa5y0g9pmnmOlHJ?pid=ImgGn"]
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
  useEffect(() => {
    validatePassword();
  }, [confirmPass]);

  const validatePassword = () => {

    if(pass === confirmPass){
      setPasswordCheckStatus(() => true)
     
    }
    else{
      setPasswordCheckStatus(false)
    }
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPass(() => e.target.value)
    validatePassword()
    
  }
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(passwordCheckStatus){
    const profileImageIndex = Math.floor(Math.random() * defaultProfileImages.length);
    const profileImage = defaultProfileImages[profileImageIndex]
    const newUserDetails = {firstName,lastName,email,pass,profileImage}
    signUpUser(newUserDetails)
    setEmail('')
    setPass('')
    setFirstName('')
    setLastName('')
    navigate(redirectPath,"/")
    }
  }
  return (
    <div className='sign-in-page'>
      <div className='sign-up-form-container'>
      <div className='home-section-headings'>Signup</div>
      <form onSubmit={handleSubmit}>
      <div className='first-and-lastnames'>
  <div className="form-group">
    <label htmlFor="first-name" className="form-label">First Name
    <input type="text" id="first-name" className="login-inputs" value = {firstName} onChange={handleFirstNameChange} required/>
    </label>
  </div>
  <div className="form-group">
    <label htmlFor="last-name" className="form-label">Last Name</label>
    <input type="text" id="last-name" className="login-inputs" required
        value = {lastName} onChange={handleLastNameChange}
    />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="email" className="form-label">Email </label>
    <input type="email" id="email" className="login-inputs" required
        value = {email} onChange={handleEmailChange}
    />
   
  </div>
  <div className="form-group">
    <label htmlFor="password" >Password</label>
    <input  type="password" id="password" className='login-inputs' required
        value = {pass} onChange={(handlePasswordChange)}  style = {{borderColor:passwordCheckStatus?"green":"red"}}
    />
    
  </div>
  <div className="form-group">
    <label htmlFor="password" >Confirm Password <span style={{color:"red"}}>{passwordCheckStatus?"":"Passwords do not match"}</span></label>
    <input  type="password" id="password" className='login-inputs' required
        value = {confirmPass} onChange={(handleConfirmPasswordChange)} style = {{border:passwordCheckStatus?"2px solid green":"2px solid red" }}
    />
    
  </div>
 
 <div className='sign-up-button-container'>
  <button type="submit" className="sign-up-btn">Signup</button>
  </div>
</form>

  </div>
  <div className='user-prompt-container' onClick={() => navigate("/sign-in")}>
    <p>Already have an account?</p>
  </div>
      </div>
    
  )
}

export default SignUp
