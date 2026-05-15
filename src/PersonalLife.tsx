import { useRef, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profilephoto from "public/images/pro-FoEfCRZd.webp";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import ImageGallery from "react-image-gallery";

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
  const galleryRef = useRef<ImageGalleryRef>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/images/hiking")
      .then((r) => r.json())
      .then(setGalleryImages)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <h2>Hiking and Climbing</h2>

      <Grid container spacing={5} width="80vw" sx={{ alignItems: "center" }}>
        <Grid size={8} sx={{ alignItems: "center" }}>
          <Typography
            component="div"
            textAlign={"left"}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Since coming to WWU I have spent many weekends out on the mountain.
            I have found hiking is the best way to balance hard work during the
            week with a fun reset.
          </Typography>
        </Grid>

        <Grid size={4}>
          {loading ? (
            <Typography>Loading images...</Typography>
          ) : (
            <ImageGallery
              ref={galleryRef}
              items={galleryImages}
              showThumbnails={false}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={3000}
              onSlide={(index) => console.log("Slid to", index)}
            />
          )}
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

export default function PersonalLife() {
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
