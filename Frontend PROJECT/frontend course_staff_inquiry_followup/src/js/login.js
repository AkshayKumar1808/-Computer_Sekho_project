import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; // Import your custom CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const admin = {
      email,
      password,
    };
//http://localhost:8080/api/pta/adminLogin',
    try {
      const response = await fetch('http://localhost:5120/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
        credentials: 'include', // To include cookies in the request
      });

      if (response.status === 200) {

         const token = await response.json();
        
        //localStorage.setItem('jwt1', token.jwt);
       // localStorage.setItem('refreshToken', token.refreshToken);
        // Optionally redirect to home
         navigate('/admin'); // Uncomment if using react-router-dom
      } else {
        const data = await response.json();
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          {errors.password && <p className="form-error">{errors.password}</p>}
        </div>
        <button type="submit" className="form-button">Login</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
