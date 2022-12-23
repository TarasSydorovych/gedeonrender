import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography'
import { Hidden } from '@mui/material';
import one from '../../assets/Renders/1.jpg'
import two from '../../assets/Renders/2.jpg'
import thre from '../../assets/Renders/3.jpg'
import four from '../../assets/Renders/4.jpg'
import five from '../../assets/Renders/5.jpg'
import six from '../../assets/Renders/6.jpg'
import seven from '../../assets/Renders/7.jpg'
import eight from '../../assets/Renders/8.jpg'
import nine from '../../assets/Renders/9.jpg'
import then from '../../assets/Renders/10.jpg'
import eleven from '../../assets/Renders/11.jpg'
import twelve from '../../assets/Renders/12.jpg'
import thirteen from '../../assets/Renders/13.jpg'
export default function Body() {
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
  return (
    <>
    <Typography 
     variant="h6"
     style={styleTypo}
     >
    A Gallery of Our 3D-Rendering Works
    </Typography>
    <Box sx={{ width: '97%', height: 450, marginLeft: '1.5%', marginRight: '1.5%', }}>
      <ImageList  variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem className='wrapClassPic' key={item.img} >
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
           >Interior Visualization</h1>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </>
  );
}

const itemData = [
  {
    img: one,
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: two,
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: thre,
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: four,
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: five,
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: six,
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: seven,
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: eight,
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: nine,
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: then,
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: eleven,
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: twelve,
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: thirteen,
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
 
];
