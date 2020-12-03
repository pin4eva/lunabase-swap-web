import React, { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GalleryList } from "../../shared-data/gallery";

const ProductGallery = () => {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const [images, setImages] = useState(GalleryList);

  useEffect(() => {
    primaryRef.current.sync(secondaryRef.current.splide);
  }, []);

  const primaryOptions = {
    type: "loop",
    focus: "center",
    width: 674,
    perMove: 1,
    pagination: false,
    rewind: true,
    // arrows: false,
  };

  const secondaryOptions = {
    type: "slide",
    rewind: true,
    gap: 5,
    pagination: false,
    fixedWidth: 150,
    fixedHeight: 100,
    cover: true,
    isNavigation: true,
    updateOnMove: true,
    arrows: false,
  };

  return (
    <div className="product-gallery">
      <Splide
        options={primaryOptions}
        ref={primaryRef}
        className="product-slide"
      >
        {images.map((image, index) => {
          return (
            <SplideSlide key={image.key}>
              <img src={image.img} />
            </SplideSlide>
          );
        })}
      </Splide>

      <Splide
        options={secondaryOptions}
        ref={secondaryRef}
        className="product-slide-nav"
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

export default ProductGallery;
