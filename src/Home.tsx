import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import HomeText from "./HomeText.tsx";
import Box from "@mui/material/Box";
import Introduction from "./Introduction.tsx";
import Skills from "./Skills.tsx";
import ResearchExperience from "./ResearchExperience.tsx";
import OtherExperience from "./OtherExperience.tsx";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Container sx={{ width: "100vw" }}>
      <Introduction />

      <Box
        sx={{ padding: 5, display: "flex", bgcolor: "#2e3532", width: "80vw" }}
      >
        <HomeText />
      </Box>
      <ResearchExperience />
      <OtherExperience />

      <Skills />
    </Container>
  );
}
