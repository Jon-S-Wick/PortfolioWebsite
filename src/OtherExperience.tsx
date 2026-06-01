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
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3} sx={{ alignItems: "flex-start" }}>
        <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
          <h2>Molecular Bioscience Club Lead</h2>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src="/images/mbsc/mbsc_cake.webp"
            alt="Molecular Bioscience Club"
            sx={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
          <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 1, fontStyle: "italic" }}>
            Molecular Bioscience club bake off
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <h2>Molecular Bioscience Club Lead</h2>
          </Box>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            During my final year at WWU I wanted to make an impact and share my
            knowledge with upcoming students. In order to achieve this I have
            started leading the Molecular Bioscience Club at WWU. During my time
            as lead we have assisted students in their choices at the
            university to achieve their goals or identify what they want to
            pursue after graduation. I have coordinated with professors,
            department chairs, and experts outside of the university to develop
            meetings.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export function SotaBot() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3} sx={{ alignItems: "flex-start" }}>
        <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
          <h2>Programming Lead</h2>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src="https://static.wixstatic.com/media/d5980a_0953463042244e94ae04a3dd29bedaad~mv2.jpg"
            alt="SOTAbots FRC team 2557 robot Hornet (2022)"
            sx={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
          <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 1, fontStyle: "italic" }}>
            SOTAbots FRC Team 2557 — 2022 robot "Hornet" (sotabots.com)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <h2>Programming Lead</h2>
          </Box>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            During high school I was the lead programmer on FIRST Robotics team
            2557. During this time I developed Code used in the semi-finals of
            the 2022 World Championship of FIRST Robotics Competition and 2023
            district championship. One of the most rewarding aspects of my role
            was to teach students to program in Java using industry-standard
            design patterns. I also coordinated with other leads on the team to
            develop a robot, build community, perform local outreach, and obtain
            funding. Despite this only being a high school team I learned skills
            that I still use today. Our team had an emphasis on student
            leadership which allowed me to become self-sufficient and learn the
            joys of teaching students.
          </Typography>
        </Grid>
      </Grid>
    </Box>
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
