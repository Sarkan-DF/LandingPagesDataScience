import { Box, Button, Container, Grid, Typography } from "@mui/material";
import imgData from "../img/pngegg.png";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
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
            <Typography variant="h4" textAlign={"end"} p={2}>
              7 Anos Capacitando Milhares de Alunos em Data Science no Brasil e
              no Mundo.
            </Typography>
            <Typography variant="body1" textAlign={"end"} p={2}>
              Nosso treinamento é projetado para fornecer as habilidades em uma
              abordagem prática. O sucesso dos nossos alunos é o nosso melhor
              trunfo para mostrar a qualidade das nossas Formações.
            </Typography>
            <Box mr={2} display={"flex"} justifyContent={"end"}>
              <Button variant="contained" color="secondary">
                INSCREVÁ-SE AGORA
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} display={"flex"} justifyContent={"center"}>
            <img src={imgData} alt="Data Science" width={"100%"}></img>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default HeroSection;
