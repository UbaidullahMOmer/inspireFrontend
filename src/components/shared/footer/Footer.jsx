import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="links">
        <div className="link">Inspire @ 2024</div>
        <div className="link">Terms of Service</div>
        <div className="link">Privacy Policy</div>
        <div className="link">Manage Cookies</div>
      </div>
      <div className="social_media_icons"> 
        <i className="ri-instagram-line"></i>
        <i className="ri-youtube-fill"></i>
        <i className="ri-facebook-fill"></i>
        <i className="ri-twitter-line"></i>
        <i className="ri-linkedin-fill"></i>
      </div>
    </div>
  )
}

export default Footer