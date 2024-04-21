import React from "react";

function Footer() {
  return (
    <div className="bg-[#0F0F0F] py-6 px-20 sm:px-20 md:px-20 lg:px-20 xl:px-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex justify-center gap-8 ">
          <div className="text-white text-base">Inspire @ 2024</div>
          <div className="text-white text-base">Terms of Service</div>
          <div className="text-white text-base">Privacy Policy</div>
        </div>
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="http://www.instagram.com/inspire_supplements/"
            target="_blank"
          >
            <i className="ri-instagram-line text-white text-xl"></i>
          </a>
          <a
            href="http://linkedin.com/company/90644309/admin/feed/posts/"
            target="_blank"
          >
            <i className="ri-linkedin-fill text-white text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
