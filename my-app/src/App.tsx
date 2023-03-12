import {
  Box,
  Button,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
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
          <Container
            maxWidth={"xl"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 10,
            }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Typography variant="h5" textAlign={"end"} p={2}>
                  7 Anos Capacitando Milhares de Alunos no Brasil e no Mundo.
                </Typography>
                <Typography variant="body1" textAlign={"end"} p={2}>
                  Nosso treinamento é projetado para fornecer as habilidades em
                  uma abordagem prática. O sucesso dos nossos alunos é o nosso
                  melhor trunfo para mostrar a qualidade das nossas Formações.
                </Typography>
                <Box mr={2} display={"flex"} justifyContent={"end"}>
                  <Button variant="outlined" color="secondary">
                    SAIBA MAIS
                  </Button>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                justifyContent={"center"}
              >
                <img src={imgData} alt="Data Science" width={"100%"}></img>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5">
                  Benefícios do Nosso Programa de Treinamento
                </Typography>
                <Typography variant="body1">
                  Participe de uma plataforma online totalmente profissional,
                  social, envolvente e interativa. Obtenha a experiência de
                  aprendizado que você merece.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
