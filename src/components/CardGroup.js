import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardImg from './CardImg';

export default function CardGroup(props) {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        const [counter, setCounter] = useState(0);

        const filterCards = (items) => {
          items = items.filter(function( obj ) {
            return obj.in_circulation !== 0;
        });

          return items
        }

        const fetcher = async () => {
          await fetch(`./paras_api?skip=${counter}`)
          // I need to call for these cards a max of 30 at a time
            .then(res => res.json())
            .then(
              (result) => {
                console.log('result', result);
                setIsLoaded(true);
                if (counter < 501) {
                  setItems(filterCards(items.concat(result.data.results)));
                  setCounter(counter + 30)
                }
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }
      
        useEffect(() => {
          fetcher()
        }, [props.more])
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {

  return (
        <Container sx={{ py: 4 }} maxWidth="md">
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