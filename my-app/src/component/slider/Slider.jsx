import React from "react";
import VideoStart from '../../assets/vadeo.mp4'
import 'react-slideshow-image/dist/styles.css'
import one from '../../assets/Renders/1.jpg'
import two from '../../assets/Renders/2.jpg'
import three from '../../assets/Renders/3.jpg'
import four from '../../assets/Renders/4.jpg'
import five from '../../assets/Renders/5.jpg'
import six from '../../assets/Renders/6.jpg'
import { useState } from "react";
import { CardMedia, Card} from '@mui/material';
import { useEffect } from "react";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";
import Pointer from "./pointer";
import play from './play'

const images = [one, one, two, three, four, five, six];
const Slider = ({curentIndex, setCurentIndex}) => {
    let delay = 6000;
    
    const [staComp, setStaComp] = useState('video');
    //  const slideStyle = {
    //     width: '100%',
    //     position: 'relative',
    //     overflow: 'hidden',
    //     height: '100%',
    //     display: 'flex',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
        
    //       }
    const slideStyleArrow ={
        display: 'flex',
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
       
    }
    const slideStylePoint ={
        alignSelf: 'flex-end',
        }
      
        useEffect(() => {
            let element = document.getElementsByClassName("slideCardMedia");
            if(curentIndex !== 0){
                delay=6000;
                setStaComp('img');
            }else{
                delay=15000;
                setStaComp('img');
                
            }
            setTimeout(
                () =>{
                const ifLastSlide = curentIndex === images.length - 1;
                const newIndex = ifLastSlide ? 0 : curentIndex + 1;
                setCurentIndex(newIndex);
               

            },
                  delay
              );
          
              return () => {};
    },[curentIndex])

    return(
        <Card className="slideStyle">
        <CardMedia
       component={staComp}
       className="slideCardMedia"
       
        autoPlay 
        loop muted
        loading='lazy'
        src={images[curentIndex]}
      />
      <div className="overlay"></div>
      <div style={slideStyleArrow}>
      <ArrowLeft curentIndex={curentIndex} setCurentIndex={setCurentIndex} images={images}/>
      <div style={slideStylePoint}>
      <Pointer  setCurentIndex={setCurentIndex} images={images}/>
        </div>
      <ArrowRight curentIndex={curentIndex} setCurentIndex={setCurentIndex} images={images}/>
      </div>
      </Card>
       
    )
}
export default Slider