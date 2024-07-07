import React from "react";

function Achivements() {
  return (
    <div className="achivements">
      <div className="achivement_section">
        <div className="achivement_icon">
          <img src="./images/healthRating.png" className="w-[65px] " alt="" />
        </div>
        <div className="achivement_title">4.8/5</div>
        <div className="achivement_sub_title">Rating</div>
      </div>
      <div className="achivement_section">
        <div className="achivement_icon">
          <img src="./images/CitrillineCompound.png" className="w-[65px] " alt="" />
        </div>
        <div className="achivement_title">6G 2:1</div>
        <div className="achivement_sub_title">Citrilline Malate</div>
      </div>
      <div className="achivement_section">
        <div className="achivement_icon">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <path d="M9 46.6667C9 40.7756 13.7756 36 19.6667 36H44.3333C50.2244 36 55 40.7756 55 46.6667V48.6667C55 51.6122 52.6122 54 49.6667 54H14.3333C11.3878 54 9 51.6122 9 48.6667V46.6667Z" fill="#EFB749" />
              <circle cx="32" cy="20" r="10" fill="#EFB749" />
            </svg> */}
          <img src="./images/L-Arginine.png" className="w-[65px] " alt="" />
        </div>
        <div className="achivement_title">1.5G</div>
        <div className="achivement_sub_title">L-Arginine</div>
      </div>
    </div>
  );
}

export default Achivements;
