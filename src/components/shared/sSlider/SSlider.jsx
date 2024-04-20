import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
function SSlider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={90}
                className="mySwiper"
            >
                {data?.map(() => {
                    return (
                        <SwiperSlide>
                            <div className="review_section_card">
                                <div className="review_section_card_detail">
                                    Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.
                                </div>
                                <div className="review_user">
                                    <div className="review_user_img"><img src="./images/reviewUser1.png" alt="" /></div>
                                    <div className="review_user_detail">
                                        <div className="review_user_name">Hellen Jummy</div>
                                        <div className="review_user_detail">Financial Counselor</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}

export default SSlider