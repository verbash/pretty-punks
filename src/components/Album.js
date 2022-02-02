import React from "react"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Links from './Links'

import CardGroup from './CardGroup';
import Content from "./Content";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Pretty Punks Club '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
          default: "#790e8b"
        },
        primary: {
          main: '#ab47bc',
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

export default function Album(props) {
  console.log('Album page', props.page);
  const [more, setMore] = React.useState(false);

  const goToCollection = () => {
    window.location.href="https://paras.id/collection/pretty-punks-by-agatheartsnear?sort=marketupdate&is_notforsale=true&pmin=0";
  }

  const getMorePunks = () => {
    setMore(!more);
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
                  <Box
      sx={{
        fontFamily: 'BlasterFont-Demo',
        color: 'beige'
      }}
    >
      Pretty Punks
    </Box>
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph> */}
            {documentToReactComponents(props.page.otherCopy.aboutBody.json)}
            {/* Pretty punks is a unique NFT Collection, stay cool and pretty with these pretty avatars.
            Each edition is uniquely made, also you can use them as an avatar! Only on Paras! */}
            {/* </Typography> */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={goToCollection}>
                {/* Collect Now on Paras Marketplace */}
                {props.page.otherCopy.ctaButton}
                </Button>
              {/* <Button variant="outlined" onClick={getMorePunks}>More Pretty Punks!</Button> */}
            </Stack>
          </Container>common
        </Box>

        <Content page={props.page}/>
        <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              sx={{ pt: 4 }}
            >
              Gallery
        </Typography>
                  <Box
      sx={{
        fontFamily: 'BlasterFont-Demo',
        color: 'beige'
      }}
    ></Box>
        <CardGroup more={{ more }} />
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 2,
          }}
        >
          <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
          <Button variant="outlined" onClick={getMorePunks}>More Pretty Punks!</Button>
          </Stack>
        </Box>
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