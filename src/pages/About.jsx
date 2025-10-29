import React, { useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import groupImage from '../assets/groupImage.webp';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
              GreenNest Resorts – “Relax in Nature’s Lap”
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, color: '#444' }}>
              Escape to GreenNest Resorts, where comfort meets the serenity of
              nature. Nestled amidst lush greenery, our resort offers a perfect
              blend of modern luxury and natural charm. Whether you seek a peaceful
              retreat or an adventure in the hills, GreenNest promises an
              unforgettable stay surrounded by breathtaking landscapes.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: '#444' }}>
              Our goal is to create a space where people can reconnect with nature
              without disturbing its delicate balance. At GreenNest, our vision is
              to build sustainable resorts that celebrate the earth’s beauty while
              preserving it for generations to come. From eco-friendly architecture
              to responsible tourism practices, every step we take is inspired by
              our commitment to protect the environment and promote harmony between
              nature and comfort.
            </Typography>

            <Button
              variant="contained"
              color="success"
              onClick={() => navigate('/contact')}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Button>
          </Grid>

          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, textAlign: 'center', px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'tertiary.main',
          }}
        >
          Our Valuable Team
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#555',
            mb: 4,
          }}
        >
          Meet the passionate team that makes GreenNest Resorts truly special.
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '1500px',
            height: { xs: '30vh', sm: '45vh', md: '60vh' },
            mx: 'auto',
            overflow: 'hidden',
            borderRadius: 4,
            boxShadow: 4,
          }}
        >
          <Box
            component="img"
            src={groupImage}
            alt="Our Team"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: 4,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(29, 84, 52, 0.85), rgba(29, 84, 52, 0.4), rgba(0,0,0,0))',
              borderRadius: 4,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
