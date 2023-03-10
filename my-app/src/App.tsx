import { Grid, Paper, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import GlobalStyled from './config/GlobalStyled';
import defaultTheme from './config/Theme/defaultTheme';
import imgData from './img/pngegg.png';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <Paper elevation={5} sx={{ height: '80vh', width: '90vw' }}>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Grid container justifyContent={'space-around'}>
            <Grid item>
              <Typography variant="h6">Igor Matos</Typography>
            </Grid>
            <Grid item>
              <img src={imgData} height={300}></img>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
