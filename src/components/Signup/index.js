import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
    });

    const [error, setError] = useState('');
      const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, company, agency } = formData;
    if (!fullName || !phone || !email || !password || !company || !agency) {
      setError('Please fill in all the required fields.');
    } else {
      setError('');
      localStorage.setItem('userProfile', JSON.stringify(formData));
      navigate('/dashboard');
    }
  };
    return (
        <div className='signup-container'>
            <div className='signup-inner-container'>
                <div className='signup-card-container'>
                    <h1>Create your <br /> PopX account</h1>
                    <div className="top-label-input-container">
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                        <label>Full Name<span>*</span></label>
                    </div>
                    <div className="top-label-input-container">
                        <input type="number"  name="phone" value={formData.phone} onChange={handleChange} />
                        <label>Phone number<span>*</span></label>
                    </div>
                    <div className="top-label-input-container">
                        <input type="email"  name="email" value={formData.email} onChange={handleChange} />
                        <label>Email address<span>*</span></label>
                    </div>
                    <div className="top-label-input-container">
                        <input type="password"  name="password" value={formData.password} onChange={handleChange} />
                        <label>Password<span>*</span></label>
                    </div>
                    <div className="top-label-input-container">
                        <input type="text"  name="company" value={formData.company} onChange={handleChange} />
                        <label>Company name<span>*</span></label>
                    </div>
                    <p className='agency'>Are you an Agency?<span>*</span></p>
                    <div>
                        <input type="radio" name="agency" value="Yes" onChange={handleChange}/>
                        <label>Yes</label>
                        <input type="radio" name='agency' value="No" onChange={handleChange}/>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    {error && <p className='error-msg'>{error}</p>}
                    <button onClick={handleSubmit} className='create-account-button'>Create account</button>
                </div>
            </div>
        </div>
    )

}

export default Signup