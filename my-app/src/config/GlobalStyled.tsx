<<<<<<< HEAD
import React from 'react';
import { GlobalStyles } from '@mui/material';
import backgroud from '../img/background-3.jpg';

const GlobalStyled: React.FC = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            padding: '0px',
            margin: '0px',
            backgroundImage: `url(${backgroud})`,
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh' 
          },

          a: { textDecoration: 'none', color: 'black' }
        }}
      />
    </>
  );
};

export default GlobalStyled;
=======
import React from "react";
import { GlobalStyles } from "@mui/material";
import backgroud from "../img/bg-2.jpg";

const GlobalStyled: React.FC = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            padding: "2rem",
            margin: "0px",
            backgroundImage: `url(${backgroud})`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },

          a: { textDecoration: "none", color: "black" },
        }}
      />
    </>
  );
};

export default GlobalStyled;
>>>>>>> origin/Assis
