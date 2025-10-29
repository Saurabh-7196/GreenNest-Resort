import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SpaIcon from "@mui/icons-material/Spa";

import pool from "../assets/services/pool.jpg";
import bonfire from "../assets/services/bonfire.jpg";
import gym from "../assets/services/gym.jpg";
import hall from "../assets/services/hall.jpg";
import spa from "../assets/services/spa.jpg";
import wifi from "../assets/services/wifi.jpg";
import playzone from "../assets/services/playzone.jpg";
import jacuzzi from "../assets/services/jacuzzi.jpg";
import roomservice from "../assets/services/roomservice.jpg";

const serviceCategories = [
  {
    title: "Accommodation",
    icon: <HotelIcon sx={{ fontSize: 60, color: "#1b5e20" }} />,
    key: "accommodation",
  },
  {
    title: "Adventure Activities",
    icon: <DirectionsBikeIcon sx={{ fontSize: 60, color: "#1b5e20" }} />,
    key: "adventure",
  },
  {
    title: "Wellness & Spa",
    icon: <SpaIcon sx={{ fontSize: 60, color: "#1b5e20" }} />,
    key: "wellness",
  },
];

const allServices = {
  accommodation: [
    {
      title: "Infinity Pool",
      image: pool,
      description:
        "Relax in our temperature-controlled infinity pool overlooking lush greenery.",
    },
    {
      title: "24-Hour Room Service",
      image: roomservice,
      description:
        "Enjoy delicious meals and snacks delivered anytime to your room.",
    },
    {
      title: "Free High-Speed Wi-Fi",
      image: wifi,
      description:
        "Stay connected with high-speed Wi-Fi available across the entire resort.",
    },
  ],
  adventure: [
    {
      title: "Bonfire Nights",
      image: bonfire,
      description:
        "Enjoy cozy bonfire evenings under the stars with music and refreshments.",
    },
    {
      title: "Conference Hall",
      image: hall,
      description:
        "Host meetings or events with our fully equipped conference facilities.",
    },
    {
      title: "Kids Play Zone",
      image: playzone,
      description:
        "A fun and safe play area to keep your little ones entertained.",
    },
  ],
  wellness: [
    {
      title: "Spa & Massage Center",
      image: spa,
      description:
        "Rejuvenate your body and mind with our premium spa and massage therapies.",
    },
    {
      title: "Hot Water & Jacuzzi",
      image: jacuzzi,
      description:
        "Unwind with hot water baths and our luxury jacuzzi facilities.",
    },
    {
      title: "Gym & Yoga Studio",
      image: gym,
      description:
        "Stay active and balanced with our modern fitness and yoga facilities.",
    },
  ],
};

const Services = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "rgba(232, 245, 233, 0.7)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: { xs: 4, sm: 6 },
          fontWeight: "bold",
          color: "#1b5e20",
        }}
      >
        Our Premium Services
      </Typography>

      {serviceCategories.map((category, catIndex) => (
        <Box
          key={category.key}
          sx={{
            mb: { xs: 6, sm: 8 },
            opacity: 0,
            animation: `fadeInUp 1s ease ${catIndex * 0.3}s forwards`,
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* Section Header */}
          <Box
            sx={{
              textAlign: "center",
              mb: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {category.icon}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1b5e20",
                mt: 1,
              }}
            >
              {category.title}
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                backgroundColor: "#1b5e20",
                borderRadius: 2,
                mt: 1,
              }}
            />
          </Box>

          {/* Services Grid */}
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {allServices[category.key].map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  opacity: 0,
                  animation: `fadeIn 1s ease ${index * 0.3 + 0.5}s forwards`,
                  "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "translateY(40px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 340,
                    height: 360,
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 180, sm: 200, md: 220 },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          textAlign: "center",
                          mb: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                          lineHeight: 1.5,
                          px: 1,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Services;
