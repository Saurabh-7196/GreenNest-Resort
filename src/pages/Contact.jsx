import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import contactImage from '../assets/contact.jpg';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: theme.palette.primary.main,
        }}
      >
        Get in Touch
      </Typography>

      <Typography
        align="center"
        sx={{
          maxWidth: 600,
          mx: 'auto',
          mb: 6,
          color: '#555',
          fontSize: '1rem',
        }}
      >
        “Have questions, feedback, or just want to say hello?  
        Feel free to reach out — we’re here to make your GreenNest experience truly unforgettable.”
      </Typography>

      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={contactImage}
            alt="GreenNest Contact"
            sx={{
              width: '100%',
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              objectFit: 'cover',
              height: isMobile ? 250 : 400,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Information
            </Typography>

            <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
              <LocationOnIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
              <Typography variant="body1">
                Hilltop Road, Ooty, Tamil Nadu, India
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
              <PhoneIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
              <Typography variant="body1">+91 98765 43210</Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
              <Typography variant="body1">
                info@greennestresorts.com
              </Typography>
            </Box>
          </Box>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              bgcolor: '#fff',
              p: 3,
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <TextField label="Full Name" variant="outlined" fullWidth required />
            <TextField label="Email Address" variant="outlined" fullWidth required />
            <TextField label="Phone Number" variant="outlined" fullWidth />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              sx={{
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 'bold',
                py: 1.2,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
              startIcon={<ContactMailIcon />}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
