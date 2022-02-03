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
                    <h3>{props.page.otherCopy.communityHeader}</h3>
                    <Community page={props.page} />
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
                    <p>{props.page.otherCopy.commonTitle}</p>
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
                    <p>{props.page.otherCopy.uncommonTitle}</p>
                </Paper>
            </Grid>
            <Grid item sm={8} xs={12}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <h3>{props.page.roadmap.header1}</h3>
                    <Roadmap page={props.page} />
                </Paper>
            </Grid>

            <Grid item sm={8} xs={12}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <h3>{props.page.otherCopy.collabsHeader}</h3>
                    <Collabs page={props.page} />
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
                    <p>{props.page.otherCopy.rareTitle}</p>
                    {/* Common (2N) = 70/285 Cards Minted Uncommon (2N) = 100/100 Cards Minted Rare (2N) = 60/95 Cards Minted Legendary (5N) = 7/20 */}
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
                    <p>{props.page.otherCopy.legendaryTitle}</p>
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