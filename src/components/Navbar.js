// components/Navbar.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElHire, setAnchorElHire] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const open = Boolean(anchorEl);
  const openHire = Boolean(anchorElHire);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHireMenuOpen = (event) => {
    setAnchorElHire(event.currentTarget);
  };

  const handleHireMenuClose = () => {
    setAnchorElHire(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none", padding: "10px 0" }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/ff11/6783/61a9c629da179a9d133c51a30b8602f4"
            alt="Phanom Professionals"
            style={{ height: "50px" }}
          />
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ color: "black" }}
          >
            Service ▾
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <Paper sx={{ padding: "20px", minWidth: "800px" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Typography variant="h6">Digital Marketing</Typography>
                  <MenuItem>SEO</MenuItem>
                  <MenuItem>Social Media Marketing</MenuItem>
                  <MenuItem>Pay Per Click (PPC)</MenuItem>
                  <MenuItem>YouTube Marketing</MenuItem>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">Design & Development</Typography>
                  <MenuItem>Shopify</MenuItem>
                  <MenuItem>Java</MenuItem>
                  <MenuItem>Magento</MenuItem>
                  <MenuItem>WordPress</MenuItem>
                  <MenuItem>PHP</MenuItem>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">Animations & Graphics</Typography>
                  <MenuItem>Video Marketing</MenuItem>
                  <MenuItem>Branding</MenuItem>
                  <MenuItem>Packaging & Labeling</MenuItem>
                  <MenuItem>Graphic Design</MenuItem>
                  <MenuItem>Web Design</MenuItem>
                  <MenuItem>Rotoscoping</MenuItem>
                  <MenuItem>Animation</MenuItem>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">E-commerce Solution</Typography>
                  <MenuItem>E-Commerce Marketing</MenuItem>
                  <MenuItem>Amazon Marketing</MenuItem>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#833ab4",
                    borderRadius: "20px",
                    marginLeft: "15px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Book an Appointment
                </Button>
              </Grid>
            </Paper>
          </Menu>
          <Button
            color="inherit"
            onClick={handleHireMenuOpen}
            sx={{ color: "black", marginLeft: "15px" }}
          >
            Hire Indian Talent ▾
          </Button>
          <Menu
            anchorEl={anchorElHire}
            open={openHire}
            onClose={handleHireMenuClose}
          >
            <MenuItem onClick={handleHireMenuClose}>Freelancers</MenuItem>
            <MenuItem onClick={handleHireMenuClose}>
              Full-time Employees
            </MenuItem>
          </Menu>
          <Button color="inherit" sx={{ color: "black", marginLeft: "15px" }}>
            Our Portfolio
          </Button>
          <Button color="inherit" sx={{ color: "black", marginLeft: "15px" }}>
            Case Study
          </Button>
        </Box>

        {/* Book an Appointment Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#833ab4",
            borderRadius: "20px",
            marginLeft: "15px",
            display: { xs: "none", md: "block" },
          }}
        >
          Book an Appointment
        </Button>

        {/* Mobile Menu */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button onClick={handleMenuOpen}>
              <ListItemText primary="Service ▾" />
            </ListItem>
            <Divider />
            <ListItem button onClick={handleHireMenuOpen}>
              <ListItemText primary="Hire Indian Talent ▾" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Our Portfolio" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Case Study" />
            </ListItem>
            <Divider />
            <ListItem>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#833ab4",
                  borderRadius: "20px",
                  width: "100%",
                }}
              >
                Book an Appointment
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
