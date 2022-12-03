import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <p style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "10px" }}>
    Copyright © 2022  Pixel Art
      </p>

    </Box>
  );
};
export default Footer;