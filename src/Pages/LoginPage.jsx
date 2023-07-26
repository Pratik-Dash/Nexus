import React, { useState, useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginStatus } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || '/'; // Get the intended private page path

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCred = { email, password };

    login(userCred);
  };

  const initiateGuestLogin = () => {
    const userCred = { email: 'adarshbalika@gmail.com', password: 'adarshbalika' };
    login(userCred); 
  };

  return (
    <div className='sign-in-page'>
      <div className='sign-in-page-pic'></div>
      <div className='form-container'>
        <div className='home-section-headings'>Log in</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email:
              <input
                type='email'
                value={email}
                onChange={handleEmailChange}
                className='login-inputs'
                autoComplete='off'
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                className='login-inputs'
                autoComplete='off'
                required
              />
            </label>
          </div>
          <div className='sign-in-page-buttons-container'>
            <button className='button-back' type='button' onClick={initiateGuestLogin}>
              Login as a Guest
            </button>
            <button type='submit' className='login-btn'>
              Login
            </button>
          </div>
          <div className='login-status'>
            {loginStatus === false ? 'Invalid Credentials,Please try again.' : ''}
          </div>
        </form>
      </div>
      <div>
        <Link to='/signup'>
          <button className='create-new-account-btn'>Create a new account</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
