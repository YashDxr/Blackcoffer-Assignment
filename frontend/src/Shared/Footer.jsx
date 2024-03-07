import { Box, Typography, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  color: "#333",
  padding: theme.spacing(2),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2">
          &copy; 2024 Blackcoffer. All rights reserved.
        </Typography>
        <Grid item>
          <Link href="#" color="inherit" variant="body2" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" variant="body2" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
          <Facebook sx={{ mx: 2 }} />
          <Twitter sx={{ mx: 2 }} />
          <Instagram sx={{ mx: 2 }} />
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
