import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";

const drawerWidth = 240;
const leftPages = [
  { name: "Home", path: "/", element: "home" },
  { name: "About Me", path: "/", element: "about" },
  { name: "Experience", path: "/", element: "Research Experience" },
  // { name: "Other Experience", path: "/", element: "Other Experience" },

  { name: "Skills", path: "/", element: "skills" },
  { name: "Personal Life", path: "/PersonalLife", element: "" },
  { name: "|    CV", path: "/CV", element: "" },
];
export function Socials() {
  return (
    <Box sx={{ position: "absolute", right: 16, display: "flex", gap: 0.5 }}>
      <IconButton
        color="inherit"
        href="https://github.com/Jon-S-Wick"
        target="_blank"
        rel="noopener noreferrer"
        size="small"
      >
        <FaGithub />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://linkedin.com/in/jonathan-wick-75aa52277"
        target="_blank"
        rel="noopener noreferrer"
        size="small"
      >
        <FaLinkedin />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://orcid.org/0009-0006-6282-2458"
        target="_blank"
        rel="noopener noreferrer"
        size="small"
      >
        <FaOrcid />
      </IconButton>
    </Box>
  );
}

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (page: (typeof leftPages)[number]) => {
    if (page.element && location.pathname === page.path) {
      const el = document.getElementById(page.element);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page.element) {
      navigate(page.path, { state: { scrollTo: page.element } });
    } else {
      navigate(page.path);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {leftPages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavClick(page)}
            >
              <Button sx={{ color: "#000000" }} key={page.name} color="inherit">
                {page.name}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          ></Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Jon Wick
          </Typography>
        </Toolbar>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            px: 2,
          }}
        >
          {leftPages.map((page) => (
            <Button
              sx={{ color: "#fff" }}
              key={page.name}
              onClick={() => handleNavClick(page)}
            >
              {page.name}
            </Button>
          ))}
          <Socials />
        </Box>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}

          <Box
            sx={{
              position: "absolute",
              right: 50,
              bottom: 50,
              display: "flex",
              gap: 0.5,
            }}
          >
            <Socials />
          </Box>
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
