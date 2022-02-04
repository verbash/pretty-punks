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
                        image={'https://cloudflare-ipfs.com/ipfs/bafybeicrjen3pv4knvzrko57zc66hzn7ylkrcgvhhnwzu4ivzkbhpis454'}
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
                        variant="body2"
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
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreidifz5e3ktw4nrwoccpfn6wsnslplhkebcufxxdr2ycbs7ju32uku'}
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
                        variant="body2"
                    >
                        {props.page.team.role2}
                    </Typography>
                    <Typography 
                        component="p"
                        variant="body2"
                        sx={{ pb: 2 }}
                    >
                        {props.page.team.description2}
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
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreicn5tvoq6r3djriyysj5wskijnui7wrbail6ef5qclvmcrqqpndsy'}
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
                        variant="body2"
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
                        image={'https://cloudflare-ipfs.com/ipfs/bafkreicp335kxs75wmddgwjqbsjkheumgrjovycr53i2gfbd2dm2k3ll5y'}
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
                        variant="body2"

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