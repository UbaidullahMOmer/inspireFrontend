import React from 'react'

function Achivements() {
  return (
    <div className="achivements">
        <div className="achivement_section">
          <div className="achivement_icon">
            <img src="./images/heart-circle.png" alt="" />
          </div>
          <div className="achivement_title">4.8/5</div>
          <div className="achivement_sub_title">Rating</div>
        </div>
        <div className="achivement_section">
          <div className="achivement_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.00049 0.565191C1.52773 0.565191 0.333822 1.7591 0.333822 3.23186C0.333822 4.70462 1.52773 5.89852 3.00049 5.89852H5.86441L6.29039 11.4364L7.93486 32.8144C8.27241 37.2026 12.0912 40.4941 16.4813 40.1805L44.0936 38.2082C47.9437 37.9332 51.0484 34.9483 51.4747 31.112L53.6508 11.5263C53.7346 10.7725 53.4934 10.0186 52.9875 9.4534C52.4816 8.88821 51.759 8.56519 51.0005 8.56519H11.4186L10.9926 3.02733C10.8858 1.63801 9.72725 0.565191 8.33382 0.565191H3.00049ZM13.6672 49.8985C13.6672 47.6894 15.458 45.8985 17.6672 45.8985H17.693C19.9021 45.8985 21.693 47.6894 21.693 49.8985V49.9244C21.693 52.1335 19.9021 53.9244 17.693 53.9244H17.6672C15.458 53.9244 13.6672 52.1335 13.6672 49.9244V49.8985ZM41.6672 45.8985C39.458 45.8985 37.6672 47.6894 37.6672 49.8985V49.9244C37.6672 52.1335 39.458 53.9244 41.6672 53.9244H41.693C43.9021 53.9244 45.693 52.1335 45.693 49.9244V49.8985C45.693 47.6894 43.9021 45.8985 41.693 45.8985H41.6672Z" fill="#EFB749" />
            </svg>
          </div>
          <div className="achivement_title">6G 2:1</div>
          <div className="achivement_sub_title">Citrilline Malate</div>
        </div>
        <div className="achivement_section">
          <div className="achivement_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <path d="M9 46.6667C9 40.7756 13.7756 36 19.6667 36H44.3333C50.2244 36 55 40.7756 55 46.6667V48.6667C55 51.6122 52.6122 54 49.6667 54H14.3333C11.3878 54 9 51.6122 9 48.6667V46.6667Z" fill="#EFB749" />
              <circle cx="32" cy="20" r="10" fill="#EFB749" />
            </svg>
          </div>
          <div className="achivement_title">1.5G</div>
          <div className="achivement_sub_title">L-Arginine</div>
        </div>
      </div>
  )
}

export default Achivements