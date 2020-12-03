import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const MiniSlide = () => {
  const [images, setImages] = useState(imageList);

  const options = {
    type: "fade",
    rewind: true,
    width: 600,
    height: 300,
    cover: true,
    focus: "center",
    drag: true,
    lazyLoad: "nearby",
    preloadPages: 2,
    cover: true,

    breakpoints: {
      640: {
        width: 300,
        height: 150,
      },
    },
  };

  return (
    <Splide
      options={options}
      className="mini-slide"
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
  );
};

export default MiniSlide;

const imageList = [
  {
    img: require("../../assets/mini-banner.jpg"),
    link: "home",
    key: 1,
  },
  {
    img: require("../../assets/mini-banner-2.jpg"),
    link: "back",
    key: 2,
  },
];
