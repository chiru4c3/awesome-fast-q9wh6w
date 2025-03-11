import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
//import Footer from "./components/Footer";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <HeroSection />
      <Services />
    </Container>
  );
};

export default App;
