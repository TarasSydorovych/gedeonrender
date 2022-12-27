import { Box } from '@mui/system';
import * as React from 'react';
import Typography from '@mui/material/Typography'
import { AiOutlineLine, AiFillSchedule, AiFillCodeSandboxSquare } from "react-icons/ai";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { VscSymbolFile, VscSymbolMethod, VscSync, VscCheckAll } from "react-icons/vsc";
export default function TextContent() {

const longArrow = {
  height: '19px',
  display: 'flex',
  
 background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='142.406' height='11.32' viewBox='0 0 142.406 11.32'%3E%3Cpath fill='%2364ca9d' d='M582,7962v-2H722v2H582Zm135.324-4.96,1.414-1.41,5.657,5.65-1.414,1.42Zm1.414,9.9-1.414-1.41,5.657-5.66,1.414,1.41Z' transform='translate(-582 -7955.62)'/%3E%3C/svg%3E%0A")`,
}
const styledFirstIcon ={
  fontSize: 120,
  color: '#64ca9d',
  margin: 10
}
  return (
    <>
    <Box sx={{width: '100%',  background: '#e8eaea', marginTop: '30px', display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Box sx={{width: '100%', background: '#e8eaea', marginTop: '120px', marginBottom: '120px', display: 'flex',justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}>
    <Typography 
     variant="h2"
     sx={{
        margin:'20px',
        fontFamily: ['Quicksand', 'sans-serif'].join(','),}}
     >
    Why we have the best services around!
    </Typography>
   < AiOutlineLine sx={{margin:'20px',color:'#9dddce'}}/>
   <Typography 
     variant="h6"
     sx={{
        margin:'20px',
        fontFamily: ['Quicksand', 'sans-serif'].join(','),
    textAlign:'center'
    }}
     >
   Render Vision’s high-quality 3D visualizations attract clients and improve the presentation of your services, simplifying and<br/> accelerating the sales process and the development of your entire project. Our visualizers are all highly-qualified German<br/> designers and architects who have been specializing in realistic 3D visualizations, 3D Rendering and creative work for <br/>years. Benefit from more than 10 years of experience in project visualization. Best 3d high end visualization services.
   </Typography>
   </Box>


   <Box sx={{width: '100%', background: '#e8eaea', marginBottom: '120px', display: 'flex',justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}>
   <Typography 
     variant="h2"
     sx={{
        margin:'20px',
        fontFamily: ['Quicksand', 'sans-serif'].join(','),}}
     >
   How we work?
    </Typography>
    <Box sx={{width: '100%',marginTop:8, background: '#e8eaea',  display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
    
    <ImageList sx={{ display: 'flex',  alignItems:'center', }} >
    <ImageListItem  sx={{ alignItems: 'center' }}  >
    <VscSymbolFile  style={styledFirstIcon}/>
    <Typography 
     
     sx={{
      textAlign:'center',
        fontSize: 15,
        fontFamily: ['Quicksand', 'sans-serif'].join(','),}}
     >
  Analysis of material, briefing and schedule
    </Typography>
    </ImageListItem>
    <ImageListItem>
      <img
        src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='142.406' height='11.32' viewBox='0 0 142.406 11.32'%3E%3Cpath fill='%2364ca9d' d='M582,7962v-2H722v2H582Zm135.324-4.96,1.414-1.41,5.657,5.65-1.414,1.42Zm1.414,9.9-1.414-1.41,5.657-5.66,1.414,1.41Z' transform='translate(-582 -7955.62)'/%3E%3C/svg%3E%0A"}
        loading="lazy"
        no-repeat
        right
      />
    </ImageListItem>
    <ImageListItem  sx={{ alignItems: 'center' }}  >
    <VscSymbolMethod  style={styledFirstIcon}/>
    <Typography 
     
     sx={{
      textAlign:'center',
        fontSize: 15,
        fontFamily: ['Quicksand', 'sans-serif'].join(','),}}
     >
  3D-Modeling and camera position approval
    </Typography>
    </ImageListItem>
    <ImageListItem>
      <img
        src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='142.406' height='11.32' viewBox='0 0 142.406 11.32'%3E%3Cpath fill='%2364ca9d' d='M582,7962v-2H722v2H582Zm135.324-4.96,1.414-1.41,5.657,5.65-1.414,1.42Zm1.414,9.9-1.414-1.41,5.657-5.66,1.414,1.41Z' transform='translate(-582 -7955.62)'/%3E%3C/svg%3E%0A"}
        loading="lazy"
        no-repeat
        right
      />
    </ImageListItem>
    <ImageListItem  sx={{ alignItems: 'center'}}  >
    <VscSync  style={styledFirstIcon}/>
    <Typography 
     
     sx={{
      textAlign:'center',
        fontSize: 15,
        fontFamily: ['Quicksand', 'sans-serif'].join(','),}}
     >
  2 previews in photorealistic quality
    </Typography>
    </ImageListItem>
    <ImageListItem>
      <img
        src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='142.406' height='11.32' viewBox='0 0 142.406 11.32'%3E%3Cpath fill='%2364ca9d' d='M582,7962v-2H722v2H582Zm135.324-4.96,1.414-1.41,5.657,5.65-1.414,1.42Zm1.414,9.9-1.414-1.41,5.657-5.66,1.414,1.41Z' transform='translate(-582 -7955.62)'/%3E%3C/svg%3E%0A"}
        loading="lazy"
        no-repeat
        right
      />
    </ImageListItem>
    <ImageListItem  sx={{ alignItems: 'center'}}  >
    <VscCheckAll  style={styledFirstIcon}/>
    <Typography 
     
     sx={{
      textAlign:'center',
        fontSize: 15,
        fontFamily: ['Quicksand', 'sans-serif'].join(','),}}
     >
  Final visualization
    </Typography>
    </ImageListItem>
   
</ImageList>
   </Box>
   </Box>
    </Box>
    
    </>
  );
}
