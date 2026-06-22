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
                interdisciplinary approach to research.
              </h3>
              <h3>
                I fell in love with biology my junior year of high school during
                a biotech class. Ever since I did my first PCR I knew this was
                the right field for me. Throughout my junior year my interest
                deepened until I decided to join the lab in which my teacher
                worked. While starting research I realized how my love for
                science and learning could be used to help people and the
                environment. Research became the pinacle of learning and
                contributing to something meaningful.
                <br />
                <br />
                Ever since then I have been interested in education and
                research. Participating in educational research with Dr. Sushil
                Oswal, UW and RNA interference research with Dr. Lee, WWU. I am
                interested in pursuing a career in research with a focus on
                understanding molecular mechanisms of disease progression and
                translating that knowledge into potential treatments.
                <br />
                <br />
                Outside of the lab, I enjoy long hikes in the mountains,
                backpacking, and climbing with my friends. When I am inside, I
                love bringing old electronics back to life and building/
                programming new projects. I also enjoy playing chess and
                reading.
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
