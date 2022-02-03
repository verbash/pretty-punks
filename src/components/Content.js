import React, { useState } from 'react'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import twitter from '../img/Twitter_perspective_matte_s.png'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Faq from './Faq'
import Roadmap from './Roadmap'
import Collabs from './Collabs'
import Community from './Community'

export default function Content(props) {

    return (
        <Grid
            container
            spacing={{
                xs: 2,
                sm: 3,
            }}
            sx={{ 
                p: 3,
                mt: 5,
            }}
            justifyContent='center'
            alignItems='center'
        >
            <Grid item sm={8} xs={12}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <h3>{props.page.roadmap.header1}</h3>
                    <Roadmap page={props.page} />
                </Paper>
            </Grid>
            <Grid item sm={4} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        
                        image={require('../img/postercard.png')}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                </Paper>
            </Grid>
            <Grid item sm={4} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={require('../img/c4ccard.png')}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                </Paper>
            </Grid>
            <Grid item sm={8} xs={12}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <h3>{props.page.faq.header1}</h3>
                    <Faq page={props.page}/>
                </Paper>
            </Grid>
        </Grid>
    );
  };

  {/* <p>{props.page.otherCopy.legendaryTitle}</p> */}