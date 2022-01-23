import React from "react"
import './Links.css'
import discord from '../img/Discord_perspective_matte_s.png'
import twitter from '../img/Twitter_perspective_matte_s.png'
import shop from '../img/Shop_perspective_matte_s.png'
import artist from '../img/Paints_perspective_matte_s.png'
import roadmap from '../img/Rocket_perspective_matte_s.png'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Links() {

    const [openArtist, setOpenArtist] = React.useState(false);
    const handleOpenArtist = () => {  setOpenArtist(true) };
    const handleCloseArtist = () => setOpenArtist(false);
    const [openRoadMap, setOpenRoadmap] = React.useState(false);
    const handleOpenRoadmap = () => {  setOpenRoadmap(true); };
    const handleCloseRoadmap = () => setOpenRoadmap(false);

    return ( 
        <>
        <div className='links'>
            <a href="https://discord.gg/JtJKmFSb" target="_blank" rel="noopener noreferrer nofollow">
                <img src={discord} height='78' width='78' alt='discord' />
            </a>
            <a href="https://twitter.com/agathearts_alyx" target="_blank" rel="noopener noreferrer nofollow">
                <img src={twitter} height='80' width='80' alt='twitter' />
            </a>
            <a href="https://paras.id/collection/pretty-punks-by-agatheartsnear" target="_blank" rel="noopener noreferrer nofollow">
                <img src={shop} height='80' width='80' alt='shop' />
            </a>
            <div onClick={handleOpenArtist}>
                <img src={artist} height='70' width='70' alt='artist' />
            </div>
            <div onClick={handleOpenRoadmap}>
                <img src={roadmap} height='75' width='75' alt='roadmap' />
            </div>
      </div>
      <Modal
      open={openArtist}
      onClose={handleCloseArtist}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Artist
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Hi! I am agathearts.near, I'm a Filipino NFT Artist on Paras and the Creator of the Pretty Punks, feel free to follow my official links!     
        </Typography>
        <CardMedia
        component="img"
        sx={{ width: 200, mt: '10px' }}
        image={require('../img/postercard.png')}
        alt="Pretty Punks poster image"
      />
        {/* <img src={require('../img/postercard.png')} width="200"/> */}
        <br />
        <Link color="inherit" href="https://paras.id/agathearts.near/creation" target="__blank" rel="noopener">
          My Paras Marketplace
        </Link>
        <br />
        <Link color="inherit" href="https://twitter.com/PrettyPunksCrew" target="__blank" rel="noopener">
          My Twitter
        </Link>
      </Box>
    </Modal>
    <Modal
      open={openRoadMap}
      onClose={handleCloseRoadmap}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Roadmap
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        GOAL 500 PRETTY PUNKS

WILL MINT ASAP GRAB THEM BEFORE THEY'RE GONE. ✨

⭐CURRENTY SUPPLY NUMBER 244/500⭐

Common (2N) = 70/285 Cards Minted
Uncommon (2N) = 100/100 Cards Minted
Rare (2N) = 60/95 Cards Minted
Legendary (5N) = 7/20 Standby!

⭐ROAD MAP⭐
COMMON - Plain Colors with Different outfits
UNCOMMON - Gradient Hair With different outfits
RARE - Drops every fives or tens counts

5 - 10 - 15 - 20 etc.
30 - 40 - 50 etc.

Specification : Gradient Hair , Gradient outfit , Luminousity in appearance.

✨LEGENDARY - Has all specifications with unique Backgrounds and it is sometimes animated and also a lil bit raise of price.

Type :
🔶Cosplay - Referenced as famous and well-known characters with enhanced art style (considered as rare).

For more infos and questions visit my twitter accounts below is the link⬇️⬇️

THANKYOUUUSOMUCH FOR BUYING MY COLLECTIONS HOPE YOU WILL SUPPORT IT UNTIL THE END. ❤️❤️
{/* <br></br>
Collabs :
❌ = Not yet 
✅ = Reached 


Collaboration work with :
✅META ANTI HERO - Completed
✅075 Mob
❌Project_NearSkullzpunk
❌Samtoshi
❌Box Head Monkey
❌Crypto Kids

<br></br>
Giveaways : 
❌ = Not Yet 
✅ = Happened


❌ Special Event for Poster Card Holders!
✅ Pretty Punks reached 100 giveaway.
✅ Pretty Punks giveaway on 200.
❌ Pretty Punks giveaway on 300.
❌ Pretty Punks giveaway on 400.
❌Pretty Punks Deluxe giveaway on 500. */}
        </Typography>
      </Box>
    </Modal>
    </>
    )
};