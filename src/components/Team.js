// import React, { useState } from 'react'
// import CardMedia from '@mui/material/CardMedia';
// import Grid from '@mui/material/Grid';
// import Paper from "@mui/material/Paper";
// import twitter from '../img/Twitter_perspective_matte_s.png'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Faq from './Faq'
// import Roadmap from './Roadmap'
// import Collabs from './Collabs'
// import Community from './Community'

// export default function Team(props) {

//     return (
//         <Grid
//             container
//             spacing={{
//                 xs: 2,
//                 sm: 3,
//             }}
//             sx={{ 
//                 p: 3,
//                 mt: 5,
//             }}
//             justifyContent='center'
//             alignItems='center'
//         >
//             <Grid item sm={3} xs={6}>
//                 <Paper elevation={3}  sx={{ p: 2 }}>
//                     <CardMedia
//                         component="img"
//                         image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
//                         alt="punks 1"
//                         // sx={{ p: 2 }}
//                     />
//                     <h3>Teammember1</h3>
//                     <h4>title</h4>
//                     <p>description</p>
//                     <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
//                         <img src={twitter} height='25' width='25' alt='twitter' />
//                     </a>
//                 </Paper>
//             </Grid>
//             <Grid item sm={3} xs={6}>
//                 <Paper elevation={3}  sx={{ p: 2 }}>
//                     <CardMedia
//                         component="img"
//                         image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
//                         alt="punks 1"
//                         // sx={{ p: 2 }}
//                     />
//                     <h3>Teammember2</h3>
//                     <h4>title</h4>
//                     <p>title</p>
//                     <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
//                         <img src={twitter} height='25' width='25' alt='twitter' />
//                     </a>
//                 </Paper>
//             </Grid>
//             <Grid item sm={3} xs={6}>
//                 <Paper elevation={3}  sx={{ p: 2 }}>
//                     <CardMedia
//                         component="img"
//                         image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
//                         alt="punks 1"
//                         // sx={{ p: 2 }}
//                     />
//                     <h3>Teammember3</h3>
//                     <h4>title</h4>
//                     <p>title</p>
//                     <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
//                         <img src={twitter} height='25' width='25' alt='twitter' />
//                     </a>
//                 </Paper>
//             </Grid>
//             <Grid item sm={3} xs={6}>
//                 <Paper elevation={3}  sx={{ p: 2 }}>
//                     <CardMedia
//                         component="img"
//                         image={'https://cloudflare-ipfs.com/ipfs/bafkreigiib77pgnyfjze7flwirm4junb3o3fgwawavz55732qe6b2ymdty'}
//                         alt="punks 1"
//                         // sx={{ p: 2 }}
//                     />
//                     <h3>Teammember4</h3>
//                     <h4>title</h4>
//                     <p>title</p>
//                     <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow">
//                         <img src={twitter} height='25' width='25' alt='twitter' />
//                     </a>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
//   };