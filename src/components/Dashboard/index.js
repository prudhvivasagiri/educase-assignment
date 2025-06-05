import './index.css'
import { FaCamera } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate()
useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      navigate('/signup'); // Redirect to signup if no profile found
    }
  }, [navigate]);

  if (!profile) return null; 
  return (
    <div className='dashboard-container'>
      <div className='dashboard-inner-container'>
        <div className='account-settings-container'>
          <p>Account Settings</p>
        </div>
        <div className='dashboard-card'>
        <div className='profile-details'>
          <div className='profile-wrapper'>
          <img alt='profile' src='https://randomuser.me/api/portraits/women/14.jpg' className='profile-pic'/>
          <FaCamera className='camera'/>
          </div>
          <div>
            <p className='profile-name'>{profile.fullName}</p>
            <p className='profile-mail'>{profile.email}</p>
          </div>
        </div>
        <div className='dashboard-description'>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard