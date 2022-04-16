import React from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Links from './Links'

import CardGroup from './CardGroup';
import Content from "./Content";
import Team from "./Team";
import Rarity from "./Rarity";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Pretty Punks Club '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    <>
      <Links />
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
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            {documentToReactComponents(props.page.otherCopy.aboutBody.json)}
            </Typography>
            <Typography variant="p" align="center" color="text.secondary" paragraph>
            {documentToReactComponents(props.page.otherCopy.announceBody.json)}
            </Typography>
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
                {/* add "GO TO GALLERY" button after router page anchors are installed */}
              {/* <Button variant="outlined" onClick={getMorePunks}>More Pretty Punks!</Button> */}
            </Stack>
          </Container>
        </Box>

        <Rarity page={props.page} />
        <Content page={props.page} />
        <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              sx={{ pt: 4 }}
            >
              Team
        </Typography>
        <Team page={props.page} />

        <Typography
              component="h3"
              variant="h3"
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
    </>
  );
}