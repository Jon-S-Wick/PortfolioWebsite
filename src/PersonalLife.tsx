import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profilephoto from "public/images/pro-FoEfCRZd.webp";
import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CV_URL =
  "https://raw.githubusercontent.com/Jon-S-Wick/CV/master/Jon-WickCV.pdf";
const WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

export function Family() {
  return (
    <Container>
      <h2>Family</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            I grew up in Tacoma Washington
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
export function Hobbies() {
  return (
    <Container>
      <h2>Climbing</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            I grew up in Tacoma Washington
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

      <h2>Circus</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            I grew up in Tacoma Washington
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

      <h2>Tech</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            I grew up in Tacoma Washington
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
export default function CVpdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
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
      <Family />
      <Hobbies />
    </Box>
  );
}
