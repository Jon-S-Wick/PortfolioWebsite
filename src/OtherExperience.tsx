import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./dna-svgrepo-com.svg";
import HomeText from "./HomeText.tsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profilephoto from "public/images/pro-FoEfCRZd.webp";
import Introduction from "./Introduction.tsx";
import Skills from "./Skills.tsx";

export function MBSC() {
  return (
    <Container>
      <h2>Molecular Bioscience Club Lead</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={4}>
          <Box
            component="img"
            src={profilephoto}
            alt="profile photo"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
            }}
          />
        </Grid>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Showed my room off
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export function SotaBot() {
  return (
    <Container>
      <h2>Programming Lead</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Developed Code used in the semi-finals of the 2022 World
            Championship of FIRST Robotics Competition and 2023 district
            championship. • Taught students to program in Java using
            industry-standard design patterns. • Coordinated with other leads on
            the team to develop a robot, build community, perform local
            outreach, and obtain funding
          </Typography>
        </Grid>

        <Grid size={4}>
          <Box
            component="img"
            src={profilephoto}
            alt="profile photo"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default function OtherExperience() {
  return (
    <Container id="Other Experience">
      <br />
      <Box
        sx={{
          padding: 5,
          display: "flex",
          bgcolor: "#2e3532",
          width: "80vw",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Other Experience
        </Typography>
        <MBSC />
        <SotaBot />
      </Box>
    </Container>
  );
}
