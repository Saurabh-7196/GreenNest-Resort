import React from "react";
import { Box, Typography, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import img1 from "../assets/resortImage/img1.jpg";
import img2 from "../assets/resortImage/img2.jpg";
import img3 from "../assets/resortImage/img3.jpg";
import img4 from "../assets/resortImage/img4.jpg";
import img5 from "../assets/resortImage/img5.jpg";
import img6 from "../assets/resortImage/img6.jpg";
import img7 from "../assets/resortImage/img7.jpg";
import img8 from "../assets/resortImage/img8.jpg";

const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
          color: 'primary.main',
        }}
      >
        Experience Our Premium Nature-Inspired Services
      </Typography>


      <ImageList
        variant="woven"
        cols={isSmallScreen ? 2 : 3}
        gap={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        }}
      >
        {services.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={image}
              alt={`Service ${index + 1}`}
              loading="lazy"
              style={{
                borderRadius: "12px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Services;
