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

export function LeeLab() {
  return (
    <Container>
      <h2>Undergruate research | Lee Lab @ WWU</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Investigate roles of sRNAs in an RNAi pathway responsible for
            maintaining genome integrity in Tetrahymena thermophila using
            computational biology and genomic sequence analysis. • Developed new
            pipelines for sRNA biogensis loci identification and analysis. •
            Develop new tools and apply existing tools using R, Python, Bash, C,
            and C++. • Prepared presentations for round tables, lab meetings,
            and journal clubs. • Participated full-time in the WWU Biology
            Summer GlobeUndergraduate Research Program (SURP). • Performed
            Western Blots, maintained Tetrahymena cells, and performed
            literature reviews to progress the goals of the lab Hello!
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
export function EduRes() {
  return (
    <Container>
      <h2>Education Research | Dr. Sushil Oswal</h2>

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
            Wrote and published a paper for the ACM Special Interest Group
            Computer Science Education conference about education and mentorship
            structure in an extracurricular robotics team. • Performed a
            qualitative analysis on interviews and survey responses to extract
            useful data. • Formulated research questions for interviews and
            surveys.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export function Biotech() {
  return (
    <Container>
      <h2>Intern | Rain Incubator</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            • Collaborated with researchers to define novel methods for tracking
            European Green Crab migration in Puget Sound. • Learned the research
            process of defining a hypothesis, performed literature review, and
            planned experiments. • Performed pilot experiments using PCR to
            define future directions.
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

export default function ResearchExperience() {
  return (
    <Container id="Research Experience" style={{ scrollMarginTop: 70 }}>
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
          Research Experience
        </Typography>
        <LeeLab />
        <EduRes />
        <Biotech />
      </Box>
    </Container>
  );
}
