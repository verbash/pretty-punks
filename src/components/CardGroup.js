import React, { useEffect, useState, useRef, useCallback } from "react"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { toUnitless } from "@mui/material/styles/cssUtils";
import CardImg from './CardImg';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CardGroup(props) {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        const [random, setRandom] = useState(0);


        const filterCards = (items) => {
          items = items.filter(function( obj ) {
            return obj.in_circulation !== 0;
        });
        // iterate through the array
        // pulling out only needed values - later
        // for now - removed burned cards
        

          return items
        }
      
        // Note: the empty deps array [] means
        // this useEffect will run once
        // similar to componentDidMount()
        // const random = Math.floor(Math.random() * 200 + 1);
        useEffect(() => {
          fetch(`https://api-v2-mainnet.paras.id/token-series?collection_id=pretty-punks-by-agatheartsnear&__limit=24&__skip=${random}`)
          // I need to call for these cards a max of 30 at a time
          // that means create a group and then use intersection observation to make the next call for 30 passing the heirarchy of the set down in props
          // would there be a master props somewhere to hold the meta title and img hash?
          // for starters lets just load and render the first 24 or whatever
            .then(res => res.json())
            .then(
              (result) => {
                
                setIsLoaded(true);
                setItems(filterCards(result.data.results));
                // there is a paras api issue with repeated items so this will need to be cleaned up before propped
                console.log('result', result);
                setRandom(props.random);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])
        // useEffect(() => {
        //   console.log('refresh')
        // }, [random])
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            console.log('items', items);
console.log('render');
  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item key={item.token_series_id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardImg item={item} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.metadata.title}
                    </Typography>
                    <Typography>
                      {item.metadata.attributes && item.metadata.attributes[0] && item.metadata.attributes[0].value}&nbsp;&nbsp;
                      {item.metadata.attributes && item.metadata.attributes[1] && item.metadata.attributes[1].value}
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={`https://paras.id/token/x.paras.near::${item.token_series_id}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener">
                        <Button size="small">View NFT</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
          );
        }
      }