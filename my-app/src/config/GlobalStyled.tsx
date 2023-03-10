import React from 'react';
import { GlobalStyles } from '@mui/material';
import backgroud from '../img/backgroud.jpg';

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
