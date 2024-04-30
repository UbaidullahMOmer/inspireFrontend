import React from "react";
import "./reviewSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ReviewSection() {
  const review = [
    {
      img: "./images/reviewUser1.png",
      detail:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      job: "Financial Counselor",
    },
    {
      img: "./images/reviewUser1.png",
      detail:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      job: "Financial Counselor",
    },
    {
      img: "./images/reviewUser1.png",
      detail:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      job: "Financial Counselor",
    },
    {
      img: "./images/reviewUser1.png",
      detail:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      job: "Financial Counselor",
    },
    {
      img: "./images/reviewUser1.png",
      detail:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      job: "Financial Counselor",
    },
  ];
  return (
    <div className="review_section">
      <div className="review_top_section">
        <div className="review_heading">
          What <span>everyone</span> says
        </div>
        <div className="review_arrow_icons">
          {/* <div className="left_arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M18.5 12.2319H6H18.5ZM6 12.2319L12 6.23193L6 12.2319ZM6 12.2319L12 18.2319Z"
                fill="#EFB749"
              />
              <path
                d="M6 12.2319L12 18.2319M18.5 12.2319H6H18.5ZM6 12.2319L12 6.23193L6 12.2319Z"
                stroke="#EFB749"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="right_arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6 12.2319H18.5H6ZM18.5 12.2319L12.5 6.23193L18.5 12.2319ZM18.5 12.2319L12.5 18.2319Z"
                fill="#EFB749"
              />
              <path
                d="M18.5 12.2319L12.5 18.2319M6 12.2319H18.5H6ZM18.5 12.2319L12.5 6.23193L18.5 12.2319Z"
                stroke="#EFB749"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> */}
        </div>
      </div>
      <div className="review_section_cards">
        <Swiper
          slidesPerView={3}
          spaceBetween={90}
          navigation={true}
          className="mySwiper"
        >
          {review?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="review_section_card">
                  <div className="review_section_card_detail">
                    {item.detail}
                  </div>
                  <div className="review_user">
                    <div className="review_user_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="review_user_detail">
                      <div className="review_user_name">{item.name}</div>
                      <div className="review_user_detail">{item.job}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSection;
