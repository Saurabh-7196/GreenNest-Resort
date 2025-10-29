import { Box, Grid, Typography, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: '#fff',
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 8 },
        mt: 'auto',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
      >
        {/* Resort Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}
          >
            GreenNest Resorts
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            “Relax in Nature’s Lap” — where comfort meets the serenity of
            nature. Experience sustainable luxury surrounded by greenery.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            Hilltop Road, Ooty, Tamil Nadu, India
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            +91 98765 43210
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            info@greennestresorts.com
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}
          >
            Follow Us
          </Typography>
          <Box>
            {[
              { icon: <FacebookIcon />, link: 'https://facebook.com' },
              { icon: <InstagramIcon />, link: 'https://instagram.com' },
              { icon: <TwitterIcon />, link: 'https://twitter.com' },
              { icon: <LinkedInIcon />, link: 'https://linkedin.com' },
            ].map((social, index) => (
              <IconButton
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  mx: 0.5,
                  transition:
                    'transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    color: '#a5d6a7',
                    transform: 'scale(1.2)',
                    boxShadow: '0 4px 12px rgba(255,255,255,0.3)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider Line */}
      <Box
        sx={{
          mt: 4,
          mb: 2,
          height: '1px',
          bgcolor: 'rgba(255,255,255,0.4)',
        }}
      />

      {/* Copyright */}
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ color: 'rgba(255,255,255,0.9)' }}
      >
        © {new Date().getFullYear()} GreenNest Resorts. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
