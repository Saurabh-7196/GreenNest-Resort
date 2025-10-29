import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../util/ImageCarousel";
import Rooms from "../components/Rooms"; // ← Import your Rooms component

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <ImageCarousel />

        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#fff",
              px: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Relax in Nature’s Lap
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                mt: 1,
              }}
            >
              Welcome to GreenNest Resorts
            </Typography>

            <Button
              variant="contained"
              color="success"
              onClick={handleBookNow}
              sx={{
                mt: 3,
                px: 4,
                py: 1,
                borderRadius: "50px",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Book Now
            </Button>
          </Box>
        )}
      </Box>

      {isMobile && (
        <Box
          sx={{
            textAlign: "center",
            color: "#2e7d32",
            mt: 3,
            px: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.6rem", sm: "2rem" },
            }}
          >
            Relax in Nature’s Lap
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, mt: 1 }}
          >
            Welcome to GreenNest Resorts
          </Typography>

          <Button
            variant="contained"
            color="success"
            onClick={handleBookNow}
            sx={{
              mt: 2,
              px: 4,
              py: 1,
              borderRadius: "50px",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Book Now
          </Button>
        </Box>
      )}

      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 8 },
          py: { xs: 4, sm: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "tertiary.main" }}
        >
          GreenNest Resorts – “Relax in Nature’s Lap”
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "#444",lineHeight: 2, }}>
          Escape to GreenNest Resorts, where comfort meets the serenity of
          nature. Nestled amidst lush greenery, our resort offers a perfect
          blend of modern luxury and natural charm. Whether you seek a peaceful
          retreat or an adventure in the hills, GreenNest promises an
          unforgettable stay surrounded by breathtaking landscapes.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "#444",lineHeight: 2, }}>
          Our goal is to create a space where people can reconnect with nature
          without disturbing its delicate balance. At GreenNest, our vision is
          to build sustainable resorts that celebrate the earth’s beauty while
          preserving it for generations to come. From eco-friendly architecture
          to responsible tourism practices, every step we take is inspired by
          our commitment to protect the environment and promote harmony between
          nature and comfort.
        </Typography>
      </Box>
      <Rooms />
    </Box>
  );
};

export default Home;
