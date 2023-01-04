import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography'

import { useEffect } from 'react';
import { useState } from 'react';
export default function PictureList({listProduct}) {
  const [load, setLoad] = useState(false);
    const styleTypo = {
        width: '70%',
        height: 180,
       position: 'relative',
       top: 90,
       left:200,
       fontFamily: ['Quicksand', 'sans-serif'].join(','), 
       fontWeight: 'bolder',
       fontSize: 40
    }
  
   
   const mouseEnter = (e) => {
    e.target.style.overflow = 'hidden';
    e.target.style.transform = 'scale(1.1)';
      e.target.style.filter = 'invert(100%)';
  
   }
   const mouseLeave = (e) => {
    e.target.style.transform = '';
    e.target.style.opacity = '1';
    e.target.style.filter = '';
   
   }
   useEffect(()=>{
    setLoad(true)
   },[listProduct])
   if(!load){
    return <div>Load Picture</div>
   }else{
  return (
    <>
    <Typography 
     variant="h6"
     style={styleTypo}
     >
    A Gallery of Our 3D-Rendering Works
    </Typography>
    <Box sx={{ width: '97%', marginLeft: '1.5%', marginRight: '1.5%', marginBottom: '10px' }}>
      <ImageList  variant="masonry" cols={3} gap={8}>
        {listProduct.map((item) => (
          <ImageListItem className='wrapClassPic' key={item.img} >
           {console.log(item.img)}
            <img 
            className='imageListHeader'
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave} 
            >
              
            </img>
           <h1 className='h1ListHeader'
           >{item.desc}</h1>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </>
  );
}
}

