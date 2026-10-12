import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profilephoto from "public/images/pro-FoEfCRZd.webp";
import { Container, Row, Col } from "react-bootstrap";

export default function Introduction() {
  return (
    <Box
      id="home"
      sx={{
        scrollMarginTop: 70,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5,
        bgcolor: "#27493f",
        display: "flex",
        width: "80vw",
      }}
    >
      <Grid container spacing={5} width="100vw" sx={{ alignItems: "center" }}>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{ alignItems: "center", order: { xs: 2, md: 1 } }}
        >
          <Typography
            variant="h1"
            component="div"
            textAlign={"center"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Hello!
          </Typography>
          <Typography
            variant="h1"
            component="div"
            textAlign={"center"}
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
            }}
          >
            I'm Jon Wick
          </Typography>
          <Typography
            variant="h3"
            component="div"
            textAlign={"center"}
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
            }}
          >
            Molecular, Cellular, and Computational Biologist
          </Typography>
          <Typography
            variant="body"
            component="div"
            textAlign={"center"}
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
            }}
          >
            <br />
            This website is for me to document the progression throughout my
            carreer. I am dedicated to advancing cancer research and becoming a
            scientific communicator. My passion is for research and giving
            others the opportunity to get a glimpse into the beautiful world of
            biological research. There is much yet to come!
            <br />
            <br />I also hope to improve public understanding of science. Both
            to share the joys of science and fight disinformation.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
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
    </Box>
  );
}
