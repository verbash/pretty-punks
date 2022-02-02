import React, { useState } from 'react'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import twitter from '../img/Twitter_perspective_matte_s.png'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Faq from './Faq'
import Roadmap from './Roadmap'

export default function Content(props) {

    return (
        <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ p: 3,  mt: 5 }}>
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
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <p>some other thing</p>
                    
                </Paper>
            </Grid>
            <Grid item sm={4} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <p>some other thing</p>
                </Paper>
            </Grid>
            <Grid item sm={8} xs={12}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <h3>{props.page.faq.header1}</h3>
                    <Faq page={props.page}/>
                </Paper>
            </Grid>

            

            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <h3>Teammember1</h3>
                    <p>title</p>
                    <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
                        <img src={twitter} height='25' width='25' alt='twitter' />
                    </a>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <h3>Teammember2</h3>
                    <p>title</p>
                    <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
                        <img src={twitter} height='25' width='25' alt='twitter' />
                    </a>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <h3>Teammember3</h3>
                    <p>title</p>
                    <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
                        <img src={twitter} height='25' width='25' alt='twitter' />
                    </a>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <h3>Teammember4</h3>
                    <p>title</p>
                    <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
                        <img src={twitter} height='25' width='25' alt='twitter' />
                    </a>
                </Paper>
            </Grid>
        </Grid>
    );
  };