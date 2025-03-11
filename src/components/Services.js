import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "blue", right: "-25px" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{ color: "blue" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "blue",
        left: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon style={{ color: "blue" }} />
    </div>
  );
}

// ServiceCard Component
const ServiceCard = ({ title, description, color }) => {
  return (
    <Card
      sx={{
        maxWidth: 250, // Limiting width to make cards smaller
        backgroundColor: color,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for better focus
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.8rem", marginBottom: 1 }}
        >
          {description}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          color: color,
          ":hover": { backgroundColor: "#eee" },
          margin: "0 8px 8px 8px",
        }}
      >
        Learn More
      </Button>
    </Card>
  );
};

// Slider settings optimized for space
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

// ServiceSection Component with Slider
const ServiceSection = ({ sectionTitle, services }) => (
  <Box
    sx={{ p: 4, bgcolor: "background.paper", boxShadow: 1, overflow: "hidden" }}
  >
    <Typography
      variant="h4"
      sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
    >
      {sectionTitle}
    </Typography>
    <Typography sx={{ mb: 3, color: "text.secondary", textAlign: "center" }}>
      Keep your lawn in top shape without lifting a finger and boost the
      appearance of your property.
    </Typography>
    <Slider {...sliderSettings}>
      {services.map((service) => (
        <Box key={service.title} sx={{ px: 1 }}>
          <ServiceCard
            title={service.title}
            description={service.description}
            color={service.color}
          />
        </Box>
      ))}
    </Slider>
  </Box>
);

const Services = () => {
  return (
    <>
      <ServiceSection
        sectionTitle="Design & Development"
        services={[
          {
            title: "Web Development",
            description: "WordPress | Magento | Shopify |",
            color: "#666666",
          },
          {
            title: "Shopify Development",
            description: "Custom Theme | E-Commerce",
            color: "#007FFF",
          },
          {
            title: "Java Development",
            description: "Custom Software Development",
            color: "#3FB618",
          },
          {
            title: "Magento Development",
            description: "Custom Theme | Custom Plugin",
            color: "#FF453A",
          },
        ]}
      />
      <ServiceSection
        sectionTitle="Animation & Graphics"
        services={[
          {
            title: "Video Marketing",
            description: "Channel SEO | Increase Subscriber & Views",
            color: "#8E44AD",
          },
          {
            title: "Branding",
            description: "Channel SEO | Increase Subscriber & Views",
            color: "#27AE60",
          },
          {
            title: "Packaging",
            description: "Channel SEO | Increase Subscriber & Views",
            color: "#E67E22",
          },
          {
            title: "Graphic Design",
            description: "Channel SEO | Increase Subscriber & Views",
            color: "#3498DB",
          },
        ]}
      />
    </>
  );
};

export default Services;
