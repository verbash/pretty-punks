import React, { useState } from 'react'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import twitter from '../img/Twitter_perspective_matte_s.png'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Typography } from '@mui/material';

export default function Team(props) {

    return (
        <Grid
            container
            spacing={{
                xs: 3,
                sm: 2,
            }}
            sx={{ 
                p: 3,
                mt: 5,
            }}
            // justifyContent='center'
            // alignItems='center'
        >
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <Typography
                        component="p"
                        variant="h6"
                        sx={{ pt: 2 }}
                    >
                        {props.page.team.name1}
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                    >
                        {props.page.team.role1}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ pb: 2 }}
                    >
                        {props.page.team.description1}
                    </Typography>
                    <a href={props.page.team.twitter1} target="_blank" rel="noopener noreferrer nofollow">
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
                    <Typography
                        component="p"
                        variant="h6"
                        sx={{ pt: 2 }}
                    >
                        {props.page.team.name2}
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                    >
                        {props.page.team.role2}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ pb: 2 }}
                    >
                        description
                    </Typography>
                    <a href={props.page.team.twitter2} target="_blank" rel="noopener noreferrer nofollow">
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
                    <Typography
                        component="p"
                        variant="h6"
                        sx={{ pt: 2 }}
                    >
                        {props.page.team.name3}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body1"
                    >
                        {props.page.team.role3}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ pb: 2 }}
                    >
                        {props.page.team.description3}
                    </Typography>
                    <a href={props.page.team.twitter3} target="_blank" rel="noopener noreferrer nofollow">
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
                    <Typography
                        component="p"
                        variant="h6"
                        sx={{ pt: 2 }}
                    >
                        {props.page.team.name4}
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"

                    >
                        {props.page.team.role4}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ pb: 2 }}
                    >
                        {props.page.team.description4}
                    </Typography>
                    <a href={props.page.team.twitter4} target="_blank" rel="noopener noreferrer nofollow">
                        <img src={twitter} height='25' width='25' alt='twitter' />
                    </a>
                </Paper>
            </Grid>
        </Grid>
    );
  };