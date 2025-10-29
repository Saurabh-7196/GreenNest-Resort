import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    title: "Deluxe Room",
    description:
      "Luxury room with garden view, modern interiors, and complimentary breakfast.",
    image:
      "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Suite Room",
    description:
      "Spacious suite with a private balcony, living area, and premium furnishings.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Family Cottage",
    description:
      "Perfect for families — cozy, private cottages surrounded by lush greenery.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
];

const Rooms = () => {
  const navigate = useNavigate();

  const handleBooking = (room) => {
    navigate("/booking", { state: { selectedRoom: room.title } });
  };

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "rgba(232, 245, 233, 0.7)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#1b5e20",
          mb: { xs: 3, sm: 5 },
        }}
      >
        Our Rooms & Packages
      </Typography>

      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
        {rooms.map((room, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea onClick={() => handleBooking(room)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={room.image}
                  alt={room.title}
                  sx={{
                    objectFit: "cover",
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#1b5e20" }}
                  >
                    {room.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.5 }}
                  >
                    {room.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#1b5e20",
                    "&:hover": { backgroundColor: "#2e7d32" },
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                  onClick={() => handleBooking(room)}
                >
                  Book Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Rooms;
