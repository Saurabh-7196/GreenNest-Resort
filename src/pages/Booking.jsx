import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";

const roomOptions = [
  {
    type: "Deluxe Room",
    description:
      "Luxury room with modern amenities, garden view, and complimentary breakfast.",
    image:
      "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Suite Room",
    description:
      "Spacious suite with a private balcony, living area, and premium furnishings.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Family Cottage",
    description:
      "Ideal for families — cozy, private cottages surrounded by lush greenery.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
];

const Booking = () => {
  const [roomType, setRoomType] = useState(roomOptions[0]);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSubmit = () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select both Check-in and Check-out dates");
      return;
    }
    const formattedCheckIn = format(checkInDate, "dd MMM yyyy");
    const formattedCheckOut = format(checkOutDate, "dd MMM yyyy");
    alert(
      `Booking confirmed!\nRoom: ${roomType.type}\nCheck-in: ${formattedCheckIn}\nCheck-out: ${formattedCheckOut}\nGuests: ${guests}`
    );
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4, md: 6 },
        minHeight: "100vh",
        backgroundColor: "rgba(232, 245, 233, 0.7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, sm: 5 },
          fontWeight: "bold",
          color: "#1b5e20",
          textAlign: "center",
        }}
      >
        Booking Section
      </Typography>

      <Card
        sx={{
          maxWidth: 700,
          width: "100%",
          mb: 4,
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={5}>
            <CardMedia
              component="img"
              image={roomType.image}
              alt={roomType.type}
              sx={{
                width: "100%",
                height: { xs: 200, sm: "100%" },
                objectFit: "cover",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, color: "#1b5e20" }}
              >
                {roomType.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {roomType.description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Card
        sx={{
          maxWidth: 700,
          width: "100%",
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#1b5e20",
              mb: 2,
              textAlign: "center",
            }}
          >
            Book Your Stay
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={2} justifyContent="center">
              {/* Room Type */}
              <Grid item xs={12}>
                <TextField
                  select
                  label="Select Room Type"
                  value={roomType.type}
                  onChange={(e) => {
                    const selected = roomOptions.find(
                      (r) => r.type === e.target.value
                    );
                    setRoomType(selected);
                  }}
                  fullWidth
                  size="small"
                >
                  {roomOptions.map((room) => (
                    <MenuItem key={room.type} value={room.type}>
                      {room.type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Check-in Date"
                  value={checkInDate}
                  onChange={(newValue) => setCheckInDate(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth size="small" />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Check-out Date"
                  value={checkOutDate}
                  onChange={(newValue) => setCheckOutDate(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth size="small" />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  fullWidth
                  size="small"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#1b5e20",
                    "&:hover": { backgroundColor: "#2e7d32" },
                    borderRadius: 2,
                  }}
                >
                  Confirm Booking
                </Button>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Booking;
