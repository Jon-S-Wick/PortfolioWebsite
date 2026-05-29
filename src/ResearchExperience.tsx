import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./dna-svgrepo-com.svg";
import HomeText from "./HomeText.tsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profilephoto from "public/images/pro-FoEfCRZd.webp";
import tetrahymena from "public/images/tetrahymena_thermophila.png";
import Introduction from "./Introduction.tsx";
import Skills from "./Skills.tsx";

export function LeeLab() {
  return (
    <Container>
      <h2>Undergraduate research | Lee Lab @ WWU</h2>
      <h4>June 2024 - present </h4>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            During my first summer at WWU I joined the Lee lab. The Lee lab is a
            team of researchers investigating a novel role of small guide
            molecules (small RNAs) in maintaining genome integrity. My role
            in the lab is to investigate origins of these small RNAs and
            understand how changes in these sRNAs results in the phenotypes we
            are seeing. I have developed a new pipeline and tools to analyze
            both of these questions. During my time in the lab I have learned
            extensive technical skills such as Western blots, genomic analysis,
            and refined programming languages proficiency for these tasks. I
            have also gained important soft skills such as independence from
            running my own project, communication with lab members and outside
            of the lab,             and presentation skills.{" "}
          </Typography>
        </Grid>
        <Grid size={4}>
          <Box
            component="img"
            src={tetrahymena}
            alt="Tetrahymena thermophila"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
            }}
          />
          <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 1, fontStyle: "italic" }}>
            Tetrahymena thermophila — Robinson R (2006) PLoS Biol, CC BY 2.5
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}


export function EduRes() {
  return (
    <Container>
      <h2>Education Research | Dr. Sushil Oswal</h2>
      <h4> February 2023 - May 2024 </h4>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={4}>
          <Box
            component="img"
            src="/images/education/edu_research.webp"
            alt="Education research"
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
            During and following my time in SOTAbots I joined a group interested
            in understanding the mechanisms of teaching in a student-led
            robotics team. The student leadership on the team included not only
            the technical aspects, such as building or programming, but also
            funding, teaching, and outreach. We hypothesized that increased
            student responsibility would lead to increased self-efficacy,
            knowledge, and a positive perception of their work. We were also
            interested in how historically underrepresented groups were impacted
            by the team's structure. We utilized surveys and interviews with
            team members, student leaders, and adult mentors. We analyzed the
            answers by multiple rounds of qualitative coding to derive themes
            from the data. Our analysis culminated in a paper that was published
            at the 2024 ACM SIGCSE conference, along with a poster. We found
            that most students reported increased confidence and skill
            development, although some preferred more structured guidance. This
            project strengthened my ability to analyze complex datasets, conduct
            independent research, and work collaboratively. These skills have
            been essential to my later biology research.
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
      <h4>May 2022 - December 2022 </h4>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            variant="body1"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            My first research experience started in the summer of 2022. I joined
            RAIN Incubator to investigate novel methods for detecting the
            invasive European Green Crabs in the Puget Sound. Previous methods
            were very laborious and required a trained technician to extract
            several liters of water and perform an environmental DNA PCR. As I
            joined the lab, we started a new project to develop a sentinel for
            the automated detection of European Green Crabs. As the project was
            just getting off the ground, I was doing preliminary work, including
            finding and evaluating the available literature, performing
            preliminary PCRs, and designing novel mechanisms for detecting
            environmental DNA. I was motivated by the impact that this project
            could have. Under the mentorship of Dr. McKee-Johnson, I learned the
            foundations for developing scientific hypotheses, planning
            experiments, and approaching research questions. This project
            equipped me with the skills that I used in future projects and
            sparked a passion for research.
          </Typography>
        </Grid>

        <Grid size={4}>
          <Box
            component="img"
            src="/images/biotech/gel_electrophoresis.webp"
            alt="Agarose gel with DNA on UV transilluminator"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
            }}
          />
          <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 1, fontStyle: "italic" }}>
            Agarose gel with DNA ladders — Dirk Hünniger, CC BY-SA 2.0
          </Typography>
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
