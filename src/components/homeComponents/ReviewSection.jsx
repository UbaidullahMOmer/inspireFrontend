import React from "react";
import "./reviewSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ReviewSection() {
  const review = [
    {
      img: "./images/img(1).jpg",
      detail:
        "I haven't used this in a while, but remembered the last time I was taking it getting pretty good results. I did notice a difference, my size increased a bit and I felt stronger. I am stacking it with Pre-jym, DHEA and Alpha Jym and getting good results at 45, so I would recomend that stack if you are looking to add size/increase muscle. Good supplement overall, one of the better ones and a decent price.",
      name: "D-Unit",
      job: "Financial Counselor",
    },
    {
      img: "./images/img(2).jpg",
      detail:
        "I read alot of these reviews of people saying that it was causing their workouts to be more intense. Getting bigger gains while taking it, the only problem is its not an anabolic steroid. You wont feel it in your workouts because its supposedly puts your body into a protein synthesis state",
      name: "Mike hilliker",
      job: "Financial Counselor",
    },
    {
      img: "./images/img(3).jpg",
      detail:
        "I don't feel any difference in strength, recovery or in muscle, guys u can have better choice. Oral is not good for health but if u really want to take risk then anabol tablet is the option.",
      name: "Harish kumar",
      job: "Financial Counselor",
    },
    {
      img: "./images/img(4).jpg",
      detail:
        "I am using this product past few days. And I am feeling that it helps in increasing the metabolism.",
      name: "Sumit gupta",
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
          <div className="left_arrow">
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
          </div>
        </div>
      </div>
      <div className="review_section_cards">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          className="mySwiper"
        >
          {review?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="review_section_card" style={{minHeight: ""}} >
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
