import { Box, Container, Link, Paper, Typography } from "@mui/material";

const DOI = "10.1145/3626253.3635603";
const PUB_URL = `https://doi.org/${DOI}`;

export default function Publications() {
  return (
    <Container sx={{ scrollMarginTop: 70, mb: 4, mt: 12 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        Publications
      </Typography>

      <Paper
        sx={{
          bgcolor: "#2e3532",
          color: "#fff",
          p: 4,
          borderRadius: 2,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          <Link
            href={PUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", textDecoration: "none",
              "&:hover": { textDecoration: "underline" } }}
          >
            Understanding the Leadership Structure and Mentoring Model of an
            Extracurricular Robotics Team: Key Findings from a Case Study
          </Link>
        </Typography>

        <Typography variant="body1" sx={{ mb: 1.5, fontStyle: "italic" }}>
          Hitender K Oswal, <b>Jonathan Wick</b>, Seth Tandon, Ashley Brewster,
          Sushil K Oswal
        </Typography>

        <Typography variant="body2" sx={{ mb: 1.5, color: "#ccc" }}>
          Proceedings of the 55th ACM Technical Symposium on Computer Science
          Education V. 2 (SIGCSE 2024), pp. 1774–1775
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, color: "#ccc" }}>
          Published: March 14, 2024 &nbsp;|&nbsp; DOI:{" "}
          <Link
            href={PUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#90caf9" }}
          >
            {DOI}
          </Link>
        </Typography>

        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            borderRadius: 1,
            p: 2.5,
            mt: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: 600, textTransform: "uppercase", fontSize: 13 }}
          >
            Abstract
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            This study examines the leadership structure of an extracurricular
            robotics team where students from four high schools manage the
            team&#39;s work. Using a qualitative survey tool, it explores the
            differing role of mentors in student-led teams and investigates the
            impact of a student mentor model on team success, challenges faced,
            and skills learned. Preliminary findings indicate that the mentors
            for this student-led team play a key role in decision making;
            however, they use a hands-off style to steer students and their
            leads in the right direction. The study provides insights into how
            students perceive the role of team mentors and the actual role
            played by these mentors. A distinguishing feature of this study is
            the participation of four student members of this team in the
            design and implementation of this study.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
