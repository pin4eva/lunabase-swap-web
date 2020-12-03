import React, { useState, useEffect } from "react";
import "../../style/slide.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { imageList } from "../../shared-data/slides";

const Slide = () => {
  const [images, setImages] = useState(imageList);

  const options = {
    type: "fade",
    rewind: true,
    // height: 550,
    heightRatio: 0.4,
    cover: true,
    focus: "center",
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    drag: true,
    lazyLoad: "nearby",
    preloadPages: 2,

    breakpoints: {
      640: {
        heightRatio: 0.6,
      },
    },
  };

  return (
    <div>
      <Splide
        options={options}
        className="main-slide"
        onClick={({ index }) => {
          console.log("You clicked", images[index]);
        }}
      >
        {images.map((image, index) => {
          return (
            <SplideSlide key={image.key}>
              <img src={image.img} alt={`Slider ${index + 1}`} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slide;
