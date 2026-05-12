import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profilephoto from "public/images/pro-FoEfCRZd.jpeg";
import { Container, Row, Col } from "react-bootstrap";

export default function Introduction() {
  return (
    <Box
      sx={{
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
        </Grid>
        <Grid size={4}>
          <Box
            component="img"
            src={profilephoto}
            alt="profile photo"
            sx={{
              width: "1",
              height: "auto",
              borderRadius: 10, // optional styling
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
