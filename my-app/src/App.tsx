import { Button, Container, Paper, ThemeProvider } from "@mui/material";
import React from "react";
import HeroSection from "./components/HeroSection";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SubSection1 from "./components/SubSection1";
import GlobalStyled from "./config/GlobalStyled";
import defaultTheme from "./config/Theme/defaultTheme";
import HelpIcon from "@mui/icons-material/Help";
import PriceSection from "./components/PriceSection";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <Container maxWidth={"xl"}>
          <Paper elevation={5} sx={{ borderRadius: "1rem" }}>
            <ResponsiveAppBar />
            <HeroSection />
            <SubSection1 />
            <PriceSection />
            <Button
              sx={{
                padding: "1rem",
                position: "fixed",
                left: "10m",
                bottom: "2em",
              }}
            >
              <HelpIcon color="primary" sx={{ fontSize: "3rem" }} />
            </Button>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
