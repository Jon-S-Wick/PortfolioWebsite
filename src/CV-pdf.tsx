import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Box, Typography } from "@mui/material";
import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CV_URL =
  "https://raw.githubusercontent.com/Jon-S-Wick/CV/master/Jon-WickCV.pdf";
const WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
export default function CVpdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        maxWidth: 1000,
      }}
    >
      <Box sx={{ height: "50vh", flex: 1 }}>
        <Worker workerUrl={WORKER_URL}>
          <Viewer fileUrl={CV_URL} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </Box>
    </Box>
  );
}
