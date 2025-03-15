import React, { useEffect, useRef } from "react";

import "./activities.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import Carousel from "../../layouts/component/carousel/Carousel";

import { gallery2 } from "../../constant";
import { Fade, Slide } from "react-awesome-reveal";

import {
  imageContent1,
  imageSwiper1,
  imageSwiper2,
  imageSwiper3,
  imageSwiper4,
  imageSwiper5,
  letterAnimation,
} from "../../constant";
import ScrollImage from "../../layouts/component/scrollVIewImage/ScrollImage";

function Activities() {
  return (
    <div className="Activities">
      <HeroImage image={gallery2} title="stay with us" />
      <section>
        <ContentWrapper
          name="Discover endless activities at Hillbrook"
          detail="

On the property, you can enjoy leisurely activities and explore the scenic surroundings. For those seeking more adventure, our dedicated staff can arrange a variety of outdoor pursuits nearby. Additionally, we can organise excursions to explore the wider area, ensuring that your stay is filled with both relaxation and excitement.
            "
          textHighlight={"endless activities"}
          option="book now"
          textPosition={"true"}
        />
      </section>

      <section>
        <Carousel
          isImage={true}
          image={[imageSwiper1, imageSwiper2, imageSwiper3, imageContent1]}
          content={[
            {
              detail: "Swim & Surf.",
            },
            {
              detail: "Farm Walks",
            },
            {
              detail: "Swim & Surf.",
            },
            {
              detail: "Coastal Hikes.",
            },
          ]}
        />
      </section>

      <section>
        <ContentWrapper
          name="Add some adventure to your stay"
          detail="

On the property, you can enjoy leisurely activities and explore the scenic surroundings. For those seeking more adventure, our dedicated staff can arrange a variety of outdoor pursuits nearby. Additionally, we can organise excursions to explore the wider area, ensuring that your stay is filled with both relaxation and excitement.
            "
          textHighlight={"adventure"}
          widthWrapper="binh"
          width={"75"}
          option="book now"
        />
      </section>

      <section>
        <Carousel
          isImage={true}
          image={[imageSwiper1, imageSwiper4, imageSwiper5]}
          content={[
            {
              title: "Paddle Boarding",
              detail:
                "Experience the thrill of paddle boarding at Hillbrook. Glide across the Pacific Ocean’s serene waters and enjoy the breathtaking coastal views. Perfect for all skill levels, this adventure offers a peaceful escape.",
            },
            {
              title: "E-biking",
              detail:
                "Ride effortlessly along picturesque coastal tracks and enjoy stunning views near Whangamata. Perfect for all fitness levels, this eco-friendly activity offers a fun way to explore the estate and beyond",
            },
            {
              title: "Surf lessons",
              detail:
                "Learn to surf on the stunning beaches near Whangamata, guided by expert instructors. Perfect for all skill levels, this exciting activity offers an unforgettable New Zealand adventure.",
            },
          ]}
        />
      </section>
      <section>
        <ScrollImage
          images={[
            imageSwiper1,
            imageSwiper2,
            imageSwiper3,
            imageSwiper4,
            imageSwiper5,
          ]}
        />
      </section>

      <div
        className="Main_image"
        style={{ backgroundImage: `url(${imageSwiper1})` }}
      >
        <Slide keyframes={letterAnimation} style={{ width: "80%" }}>
          <div className={`text`}>
            <div className="">
              Relax or explore <br></br> your very own{" "}
              <span>personal playground</span>{" "}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Activities;

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//     imageContent1,
//     imageSwiper1,
//     imageSwiper2,
//     imageSwiper3,
// ];

// const Activities = () => {
//     const containerRef = useRef(null);
//     const imageRefs = useRef([]);

//     useGSAP(() => {
//         imageRefs.current.forEach((img) => {
//           gsap.to(img, {
//             yPercent: -50, // 👈 Adjust movement distance (-50 moves further)
//             ease: "power2.inOut", // 👈 Smooth effect\

//             scrollTrigger: {
//               trigger: img,
//               start: "top center",
//               end: "bottom top",
//               scrub: true, // 👈 Higher value = slower movement
//               markers: true,
//             },
//           });
//         });
//       }, []);

//   return (
// <div ref={containerRef} style={{ background: "#f0f0f0", padding: "50px" }}>
//   {images.map((src, index) => (
//     <div key={index} style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       <img
//         ref={(el) => (imageRefs.current[index] = el)}
//         src={src}
//         alt={`Image ${index + 1}`}
//         style={{ width: "300px", opacity: 0.5, transform: "scale(0.8)", transition: "opacity 0.5s, transform 0.5s" }}
//       />
//     </div>
//   ))}
// </div>
//   );
// };

// export default Activities;
