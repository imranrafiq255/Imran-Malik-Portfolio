import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Professional, courteous and most importantly high quality service! Thank you very much I am sure I will work with you in the future!",
    },
    {
      img: profilePic2,
      review:
        "Imran is wonderful and very responsive and creative delivered faster than the given time! thank you Imran for this wonderful experience.",
    },
    {
      img: profilePic3,
      review:
        "Imran delivered a fast, well designed interface for our small business. He was responsive and very enclined to help !",
    },
    {
      img: profilePic4,
      review:
        "It is great experience working with Imran. He is a gem in fiver for mern stack web development. He understood my requirements in short time, always available and very quick to respond. He has delivered the app design in no time! Working with him value for money!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
