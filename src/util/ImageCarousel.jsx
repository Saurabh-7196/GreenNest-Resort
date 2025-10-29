import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

import img1 from "../assets/resortImage/img1.jpg";
import img2 from "../assets/resortImage/img2.jpg";
import img3 from "../assets/resortImage/img3.jpg";
import img4 from "../assets/resortImage/img4.jpg";
import img5 from "../assets/resortImage/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const ImageCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0, true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "45vh", sm: "60vh", md: "85vh" },
        overflow: "hidden",
        borderRadius: { xs: 0, sm: 2 },
        position: "relative",
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Resort view ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: "rgba(0,0,0,0.25)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
