import { APITester } from "./APITester";
import "./index.css";
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Home.tsx";
import CVpdf from "./CV-pdf.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export function App() {
  // const theme = unstable_createMuiStrictModeTheme();
  const theme = createTheme({
    palette: {
      primary: {
        light: "#ffffff",
        main: "#27493f",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CV" element={<CVpdf />} />
          </Routes>

          <Footer />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
