import React, { useState, useEffect } from 'react'
import CardMedia from '@mui/material/CardMedia';
// import { Blurhash } from "react-blurhash";

export default function CardImg(props) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

    },[isLoaded])

    return (
    <>
    {/* {isLoaded ? null :
    <Blurhash
        hash={props.item.metadata.blurhash}
        width={408}
        height={408}
      />
    } */}
      <CardMedia
        component="img"
        image={`https://cloudflare-ipfs.com/ipfs/${props.item.metadata.media}`}
        onLoad={() => setIsLoaded(true)}
        style={isLoaded ? {} : {display: 'none'}}
        alt={props.item.metadata.title}
      />
      </>
    );
  };