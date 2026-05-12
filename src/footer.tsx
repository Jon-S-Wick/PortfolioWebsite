import { Box, Container, IconButton, Typography } from "@mui/material";
import { FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { IoLocationSharp, IoMailSharp, IoGlobeSharp } from "react-icons/io5";

const links = [
  {
    icon: <IoLocationSharp />,
    label: "Bellingham WA, 98225",
    href: null,
  },
  {
    icon: <IoMailSharp />,
    label: "wickj2@wwu.edu",
    href: "mailto:wickj2@wwu.edu",
  },
  {
    icon: <IoMailSharp />,
    label: "jonwick@wickbioscience.com",
    href: "mailto:jonwick@wickbioscience.com",
  },
  {
    icon: <IoGlobeSharp />,
    label: "wickbioscience.com",
    href: "https://wickbioscience.com",
  },
  {
    icon: <FaGithub />,
    label: "github.com/Jon-S-Wick",
    href: "https://github.com/Jon-S-Wick",
  },
  {
    icon: <FaLinkedin />,
    label: "linkedin.com/in/jonathan-wick-75aa52277",
    href: "https://linkedin.com/in/jonathan-wick-75aa52277",
  },
  {
    icon: <FaOrcid />,
    label: "Orcid ID: 0009-0006-6282-2458",
    href: "https://orcid.org/0009-0006-6282-2458",
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1f1d",
        color: "#ccc",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {links.map((link) => (
            <Box
              key={link.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {link.href ? (
                <IconButton
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#ccc", p: 0, "&:hover": { color: "#fff" } }}
                >
                  {link.icon}
                </IconButton>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {link.icon}
                </Box>
              )}
              <Typography
                variant="body2"
                sx={{
                  display: "inline",
                  color: link.href ? "#aaa" : "#ccc",
                  "&:hover": link.href ? { color: "#fff" } : undefined,
                }}
                component={link.href ? "a" : "span"}
                {...(link.href
                  ? {
                      href: link.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                {link.label}
              </Typography>
            </Box>
          ))}
        </Box>
        <br />

        <Typography variant="h8" gutterBottom>
          *This website was built with the assistance of AI
        </Typography>
      </Container>
    </Box>
  );
}
