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
            About the artist      
        </Typography>
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
 ⭐CURRENTY SUPPLY NUMBER 170/500⭐
 Common (2N) = 54/285 Cards Minted 

Uncommon (2N) = 67/100 Cards Minted 

Rare (2N) = 45/95 Cards Minted 

Legendary (5N) = 4/20 Standby! 

 
COMMON - Plain Colors with Different outfits
 
UNCOMMON - Gradient Hair With different outfits
 
RARE - Drops every fives or tens counts 

5 - 10 - 15 - 20 etc. 
30 - 40 - 50 etc.

 Specification : Gradient Hair , Gradient outfit , Luminousity in appearance. 


✨LEGENDARY - Has all specifications with unique Backgrounds and it is sometimes animated and also a lil bit raise of price. 

Type : 🔶Cosplay - Referenced as famous and well-known characters with enhanced art style (Rare // Legendary). 


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