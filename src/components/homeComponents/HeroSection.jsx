
import React from 'react'

function HeroSection() {
  return (
    <div className="home_hero_section">
        <div className="hero_content_section">
          <div className="hero_content_heading">
            REACH YOUR LIMITS AND GET TO THE NEXT LEVEL
          </div>
          <div className="hero_content_detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </div>
          <a href="#main_product_section" className="hero_content_btn">
            <div className="hero_btn_text">
              Order Now
            </div>
          </a>
        </div>
        <div className="hero_image_section">
          <img src="./images/heroSectionImg.png" alt="" />
        </div>
      </div>
  )
}

export default HeroSection
