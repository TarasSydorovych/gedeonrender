import React from "react";
import VideoStart from '../assets/vadeo.mp4'
import Header from './header'
import Slider from './slider/Slider'
import { useState } from "react";
const Main = () => {
 const countainerSlide = {
    width: '100%',
    height: '750px'
 }


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
    return(
        <div className="main">
<div style={countainerSlide}> 
<Slider curentIndex={curentIndex} setCurentIndex={setCurentIndex}/>
</div>
<Header/> 
<div className="content">
    <h1>{desc[curentIndex].descreption}</h1>
    <p>{desc[curentIndex].smolDes}</p> 
</div>

        </div>
    )
}
export default Main