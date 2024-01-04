import React, { useState } from 'react';
import logo from '../Images/logo.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'tulsi' && password === 'tulsi123') {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '20px' }}>
          <img src={logo} style={{ width: '100px', height: '100px' }} alt="" />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            title="Your Email"
            placeholder="tulsi9019@gmail.com"
            type="email"
            id="loginemail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            title="Your Password"
            placeholder="*******"
            type="password"
            id="loginpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div>
          <button
            name="login"
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px' }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
