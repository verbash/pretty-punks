import React, {useState, useEffect, useRef} from 'react'
import CardMedia from '@mui/material/CardMedia';
import { Blurhash } from "react-blurhash";



export default function CardImg(props) {
    const [isLoaded, setIsLoaded] = useState(false);


    return (
    <>
    {isLoaded ? null :
    <Blurhash
        hash={props.item.metadata.blurhash}
        // sx={{
        //     // 16:9
        //     pt: '20%',
        //   }}
        width={262}
        height={262}
      />
    }
      <CardMedia
        component="img"
        // sx={{
        //   // 16:9
        //   pt: '20%',
        // }}
        image={`https://cloudflare-ipfs.com/ipfs/${props.item.metadata.media}`}
        onLoad={() => setIsLoaded(true)}
        style={isLoaded ? {} : {display: 'none'}}
        alt={props.item.metadata.title}
      />
      </>
    );
  };