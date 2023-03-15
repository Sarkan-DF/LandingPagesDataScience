import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SubSection1: React.FC = () => {
  return (
    <React.Fragment>
      <Container maxWidth="md" sx={{ mt: "5rem" }}>
        <Grid container spacing={3} p={3}>
          <Grid item xs={12} sm={12} textAlign={"center"}>
            <Typography variant="h4">
              Benefícios do Nosso Programa de Treinamento
            </Typography>
            <Typography variant="body1" padding={"2rem"} mt={1}>
              Participe de uma plataforma online totalmente profissional,
              social, envolvente e interativa. Obtenha a experiência e o
              aprendizado em Data Science que você merece.
            </Typography>
            <Box mr={2} display={"flex"} justifyContent={"center"}>
              <Button variant="contained" color="secondary">
                SAIBA MAIS
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SubSection1;
