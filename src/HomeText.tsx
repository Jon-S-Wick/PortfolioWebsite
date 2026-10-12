import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import aboutPhoto from "public/images/about_photo.jpg";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{ scrollMarginTop: 70 }}
    >
      <Container>
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{ alignItems: "center", order: { xs: 2, md: 1 } }}
          >
            <Typography component="div" textAlign={"left"} sx={{ flexGrow: 1 }}>
              <h2>WWU '26 Molecular and Cellular Biology, CS minor</h2>
              <h3>
                I am a biologist and a programmer interested in an
                interdisciplinary approach to research. I utilize a mix of
                molecular and computational methods to evaluate molecular
                pathways. I hope to contribute to research that not only
                improves patient outcomes but also reduces toxicity, improving
                patient survival and experience.
              </h3>
              <h3>
                I fell in love with biology my junior year of high school during
                a biotech class. Ever since I did my first PCR I knew I wanted
                more. Throughout my junior year my interest continued to deepen
                eventually leading to joining the lab in which my teacher
                worked. I started a project investigating how we could track
                invasive species using environmental DNA. It was then that I
                realized how my love for computer science could pair with
                biological investigation to mean something greater.
                <br />
                <br />
                Ever since my time at RAIN incubator I have been pursuing
                research in any copacity I can. I participated in educational
                research with Dr. Sushil Oswal, UW. We were investigating the
                effects of student led learning in robotics teams. This expanded
                my knowledge of cultural impacts to learning, qualitative
                research, and allowed me to contribute to a research project
                from conception to publication. I loved the research process
                itself, solidifying my interest in pursuing a career in
                research.
                <br />
                <br />
                As soon as I started at WWU I knew that I wanted to pursue
                research. I immediatly started looking for labs to join and
                emailed Dr. Lee. I joined the lab the summer after my first year
                and started investigating RNA interference pathways involved in
                maintaining genome integrity in
                <i>Tetrahymena thermophila</i>
                with Dr. Lee at WWU. I joined this lab as I wanted to further
                the understanding how genomic integrity is lost and results in
                mutations that lead to disease progression and cancer.
                <br />
                <br />
                Through my experience in genomic analysis and molecular
                techniques, as well as coursework in immunobiology, I found an
                interest in utilizing a multidisciplinary approach to analyzing
                disease progression I am interested in pursuing a career in
                research with a focus on understanding molecular mechanisms of
                disease progression and translating that knowledge into
                precision treatments.
                <br />
                <br />
                Outside of the lab, I love to spend time in nature. I enjoy long
                hikes in the mountains, backpacking, and climbing with my
                friends. I have found a community in circus groups practicing
                unicycling and juggling. When I am inside, I love bringing old
                electronics back to life and building/programming new projects.
                I also enjoy playing chess and reading.
                <br />
                <br />
                Current favorite books: 'The Overstory' by Richard Powers and
                'The Emperor of All Maladies' by Siddhartha Mukherjee.
              </h3>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              component="img"
              src={aboutPhoto}
              alt="About photo"
              sx={{
                width: "100%",
                // aspectRatio: "4/3",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
export default Home2;
