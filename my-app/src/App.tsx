import { Button, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import GlobalStyled from "./config/GlobalStyled";
import defaultTheme from "./config/Theme/defaultTheme";
import imgData from "./img/pngegg.png";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <Paper elevation={5} sx={{ height: "80vh", width: "90vw" }}>
          <ResponsiveAppBar />
          <Container maxWidth={"xl"}>
            <Grid container justifyContent={"space-around"} padding={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" textAlign={"end"} p={2}>
                  7 Anos Capacitando Milhares de Alunos no Brasil e no Mundo.
                </Typography>
                <Typography variant="body1" textAlign={"end"} p={2}>
                  Nosso treinamento é projetado para fornecer as habilidades em
                  uma abordagem prática. O sucesso dos nossos alunos é o nosso
                  melhor trunfo para mostrar a qualidade das nossas Formações.
                </Typography>
                <Button variant="outlined" color="secondary">
                  SAIBA MAIS
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img src={imgData} alt="Data Science" height={200}></img>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
