import React, { useEffect, useState, useRef, useCallback } from "react"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GridRoom from './GridRoom';

import Links from './Links'

import CardGroup from './CardGroup';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'site by  '}
      <Link color="inherit" href="https://twitter.com/Verbash1" style={{ textDecoration: 'none' }}>
        verbash
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#aa3fb5',
        },
        secondary: {
          main: '#d82766',
        },
        success: {
          main: '#00e676',
        },
      },
      typography: {
        fontFamily: 'Roboto',
        h2: {
          fontFamily: 'Creepster',
        },
      },
});

export default function Album() {
    const [Cards, setCards] = React.useState('')
    const [TokensApi, setTokensApi] = React.useState('')
    const [random, setRandom] = React.useState(0);

  const goToCollection = () => {
    window.location.href="https://paras.id/collection/pretty-punks-by-agatheartsnear?sort=marketupdate&is_notforsale=true&pmin=0";
  }

  const getRandomPunks = () => {
    //pass a value down through to card group
    const random = Math.floor(Math.random() * 200 + 1);
    console.log('random', random);
    setRandom(random);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Links />
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pretty Punks
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Pretty punks is a unique NFT Collection, stay cool and pretty with these pretty avatars.
            Each edition is uniquely made, also you can use them as an avatar! Only on Paras!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={goToCollection}>Collect Now!</Button>
              <Button variant="outlined" onClick={getRandomPunks}>More Pretty Punks!</Button>
            </Stack>
            <GridRoom />
          </Container>
          {/* <GridRoom /> */}
        </Box>
        <CardGroup random={{ random }} />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Pretty Punks on <Link href="https://near.org" target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'none' }}>NEAR</Link>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          THANK YOU ALL FOR SUPPORTING AND COLLECTING PRETTY PUNKS! PRETTY PUNKS TO THE MOON!⭐🚀
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}