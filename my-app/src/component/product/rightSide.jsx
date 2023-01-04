
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Product from './product';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
export default function RightSide({product}) {

console.log('prod', product[0].img[0].img);
  return (
    <>
<div style={{
  
  width: '60%',
    marginLeft: '20px',
        display: 'flex',
    justifyContent:'center',
     flexDirection: 'column',
     
}}>
<PhotoProvider
speed={() => 800}
easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
variant="masonry" cols={1} gap={1}>
<div className="foo">
        {product[0].img.map((el, index)=>{
          return(
          <ImageListItem className='wrapClassPic' sx={{marginRight: 3}}  key={index}>
            <PhotoView key={index} src={el.img}>
            <img 
            style={{marginBottom: 15, }}
            className='imageListHeader'
              src={`${el.img}?w=248&fit=crop&auto=format`}
              srcSet={`${el.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={'ss'}
              loading="lazy"
      
            >
              
            </img>
            </PhotoView>
          </ImageListItem>
          )
         })}
          
        </div>
      </PhotoProvider>
</div>
    </>
  );
}
