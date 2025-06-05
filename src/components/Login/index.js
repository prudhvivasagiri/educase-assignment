import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
const Login = () => {
    const navigate = useNavigate();
      const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = () => {
    const { email, password } = formData;
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (
      storedProfile &&
      storedProfile.email === email &&
      storedProfile.password === password
    ) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

    return (
        <div className='login-container'>
            <div className='login-inner-container'>
                <h1 className='login-heading'>Signin to your<br />PopX account</h1>
                <p className='login-description'>Lorem ipsum dolor sit emt,consectetur adipiscing elit,</p>
                <div className="top-label-input-container">
                    <input type="email" name="email"
            value={formData.email}
            onChange={handleChange} placeholder='Enter email address'/>
                    <label>Email address<span>*</span></label>
                </div>
                <div className="top-label-input-container">
                    <input type="password" name="password"
            value={formData.password}
            onChange={handleChange} placeholder='Enter password'/>
                    <label>Password<span>*</span></label>
                </div>
                {error && <p className='error-msg'>{error}</p>}
                <button className='login-button-a' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login