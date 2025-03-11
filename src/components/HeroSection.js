import React from "react";
import {
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: isMobile ? "40px 10px" : "50px 20px",
          backgroundImage:
            "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
          color: "white",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{ fontWeight: 600, marginBottom: "16px" }}
        >
          Let's <span style={{ color: "#FFD700" }}>innovation</span> meets your
          excellence
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{ fontWeight: 300, marginBottom: "24px" }}
        >
          Excellence refined, innovation ignited, the future starts here
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#833ab4",
            borderRadius: "20px",
            padding: "10px 30px",
            fontSize: "1rem",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#7b2cbf",
            },
          }}
        >
          Book an Appointment
        </Button>
        {/* Statistic and Logos Section */}
        <Box
          sx={{
            marginTop: "48px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "20px" : "40px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              24/7
            </Typography>
            <Typography>Online Support</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              100+
            </Typography>
            <Typography>Web Developed & Application</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              5+
            </Typography>
            <Typography>Year Experience</Typography>
          </Box>
        </Box>
      </Box>
      {/* Logos Section */}
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://i.postimg.cc/PrCFYNV0/Logo.png"
          alt="Logo 1"
          style={{ height: isMobile ? "30px" : "40px" }}
        />
      </Box>
    </>
  );
};

export default HeroSection;
