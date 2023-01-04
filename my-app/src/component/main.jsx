import React, { useEffect } from "react";
import { Link, Router } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Slider from './slider/Slider'
import { useState } from "react";
import Body from "./body/Body";

const Main = ({setBackground, listProduct}) => {
 const countainerSlide = {
    width: '100%',
    height: '750px'
 }
 
useEffect(()=>{
  setBackground('inherit')
})

 const [curentIndex, setCurentIndex] = useState(0);
 const desc = [
    {
      descreption: 'Professional 3D Rendering and Animation',
      smolDes:'Allow your customers to feel like they’re entering their new home'
    },
    {
      descreption:'Photorealistic 3D Renderings',
      smolDes:'High-quality CGIs that look like real photography'
    },
    {
      descreption:'Emotional Interior Visualization',
      smolDes:'Offer compelling images of atmospheric interior design'
    },
    {
      descreption:'Photorealistic Product Visualization',
      smolDes:'Present your creations in a completely new way'
    },
    {
      descreption:'Urban Visions in 3D',
      smolDes:'Enjoy a high-end depiction of your building project'
    },
    {
      descreption:'High-end Interior Designs',
      smolDes:'Let your clients get a taste of their future property'
    },
    {
        descreption:'Products From Every Angle',
        smolDes:'Observe, present and marvel at your product at every stage of design'
      },
  ];
  const listArt = ['All CGIs', 'Architectural Visualization', 'Interior Visualization', '3D Product Rendering', '3D Animation',  'Apartment selector', 'Virtual Reality'];
    return(
        <div className="main">
<div style={countainerSlide}> 
<Slider curentIndex={curentIndex} setCurentIndex={setCurentIndex}/>
</div>
<div className="content">
<ul className="listArt">
  {listArt.map((el, index)=>{
    return <li key={index}>
    <Link className="link" to='/'>{el}</Link>
    </li>
  })}
</ul>
    <h1 className="deskTitle">{desc[curentIndex].descreption}</h1>
    <p className="smdeskTitle">{desc[curentIndex].smolDes}</p> 

    <Box sx={{ flexGrow: 0 }}>
            <Button sx={{background: 'black', marginTop:6, borderRadius: '20px', color: 'white', width: '20vh',
            height: '6vh',
            fontFamily: ['Quicksand', 'sans-serif'].join(','), 
            fontSize: 12,
            zIndex:1,
           }}>
                SHOW MORE WORKS
            </Button>
          </Box>
</div>
<Body listProduct={listProduct}/>
        </div>
    )
}
export default Main