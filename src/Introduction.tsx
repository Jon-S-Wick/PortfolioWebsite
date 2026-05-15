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
        <Grid size={8} sx={{ alignItems: "center" }}>
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
            variant="body2"
            component="div"
            textAlign={"center"}
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              fontWeight: 10,
              display: { xs: "block", sm: "block" },
            }}
          >
            **This website was a side project to learn how to build a website
            and personal use. I have learned I am not a front end engineer.**
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
    </Box>
  );
}
