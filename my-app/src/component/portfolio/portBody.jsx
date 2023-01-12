import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography'
import { Link, Router } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
export default function PortBody({listProduct, product,setStyleAppBar,appBarStyleTwo}) {
  const [load, setLoad] = useState(false);
    const styleTypo = {
        width: '70%',
        height: 200,
       position: 'relative',
       top: 80,
       left:450,
       fontFamily: ['Quicksand', 'sans-serif'].join(','), 
       fontWeight: 'bolder',
       fontSize: 60,
       marginTop: 40,
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
   const listArt = ['All CGIs', 'Architectural Visualization', 'Interior Visualization', '3D Product Rendering', '3D Animation',  'Apartment selector', 'Virtual Reality'];
   useEffect(()=>{
    setStyleAppBar(appBarStyleTwo)
    setLoad(true)
   },[listProduct])
   if(!load){
    return <div>Load Picture</div>
   }else{
  return (
    <>
    <div className="content2">

<ul className="listArt2">
  {listArt.map((el, index)=>{
    return <li key={index}>
    <Link className="link2" to='/'>{el}</Link>
    </li>
  })}
  </ul>
  </div>
    <Typography 
     variant="h6"
     style={styleTypo}
     >
    A Gallery of Our Works
    </Typography>
    <Box sx={{ width: '97%', marginLeft: '1.5%', marginRight: '1.5%', marginBottom: '10px' }}>
      <ImageList  variant="masonry" cols={3} gap={8}>
        {product.map((item, index) => (
          <ImageListItem className='wrapClassPic' key={index} >
           {console.log(item.img)}
            <img 
            className='imageListHeader'
              src={`/${item.img[0].img}?w=248&fit=crop&auto=format`}
              srcSet={`/${item.img[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave} 
            >
              
            </img>
           <h1 className='h1ListHeader'
           ><Link style={{
            textDecoration: 'none',
            color: '#142c2d',
            fontWeight: 'bolder'
           }} to={`/product/${item._id}`}>
            {item.title}
            </Link></h1>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </>
  );
}
}

