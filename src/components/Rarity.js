import React, { useState } from 'react'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import twitter from '../img/Twitter_perspective_matte_s.png'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Typography } from '@mui/material';

export default function Rarity(props) {

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
                        image={'https://cloudflare-ipfs.com/ipfs/bafybeihvmryeijvepj25s5roc6yj7xejlypckjj6esozeizph6a36lvt74'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <Typography
                        component="p"
                        variant="body1"
                        sx={{ pt: 2 }}
                    >
                        {props.page.otherCopy.commonTitle}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                    >
                        {props.page.otherCopy.commonSubTitle}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafybeihd76uyeylsvmqsorhhytfbxuqz2fhoq6wxjjmu36nicop7t4l5su'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <Typography
                        component="p"
                        variant="body1"
                        sx={{ pt: 2 }}
                    >
                        {props.page.otherCopy.uncommonTitle}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                    >
                        {props.page.otherCopy.uncommonSubTitle}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreifim7qh33527irdmpp3wg5v43oix373kwnnbykkutw6xdwn2tcn6u'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <Typography
                        component="p"
                        variant="body1"
                        sx={{ pt: 2 }}
                    >
                        {props.page.otherCopy.rareTitle}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                    >
                        {props.page.otherCopy.rareSubTitle}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Paper elevation={3}  sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        image={'https://cloudflare-ipfs.com/ipfs/bafybeiboosikrqpeivf3zppmoxxm2sahg6wrpwx7ncz4wc5llrrfn3miui'}
                        alt="punks 1"
                        // sx={{ p: 2 }}
                    />
                    <Typography
                        component="p"
                        variant="body1"
                        sx={{ pt: 2 }}
                    >
                        {props.page.otherCopy.legendaryTitle}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                    >
                        {props.page.otherCopy.legendarySubTitle}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
  };