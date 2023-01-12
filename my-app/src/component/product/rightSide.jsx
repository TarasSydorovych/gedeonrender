import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Product from './product';
import { useState } from 'react';

import one from '../../assets/Renders/1.jpg'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
export default function RightSide({id}) {
  const [open, setOpen] = useState(false);
 const arr = id.img.map((el) => {
return {src: `/${el.img}`}
 })
 
  return (
    <>
<div style={{
  
  width: '60%',
    marginLeft: '20px',
        display: 'flex',
    justifyContent:'center',
     flexDirection: 'column',
     
}}>
<ImageList
speed={() => 800}
easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
variant="masonry" cols={1} gap={1}>
        {id.img.map((el, index)=>{
          return(
          <ImageListItem className='wrapClassPic' sx={{marginRight: 3}}  key={index}>
            
            <img 
            onClick={() => setOpen(true)}
            style={{marginBottom: 15, }}
            className='imgRightSide'
              src={`/${el.img}`}
              srcSet={`/${el.img}`}
              alt={'ss'}
              loading="lazy"
            >
            </img>
          </ImageListItem>
          )
         })}
          
     
      </ImageList>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={arr}
      />
</div>
    </>
  );
}
