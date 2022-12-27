import React from "react";
import { RxCaretLeft} from "react-icons/rx";
import play from './play'
const ArrowLeft = ({curentIndex, setCurentIndex, images}) => {
    const leftArrow = {
        fontSize: '45px', 
        cursor: 'pointer',
        color: 'white',
        
    }
    const goToPrevious = () => {
        const ifFirstSlide = curentIndex === 0;
        const newIndex = ifFirstSlide ? images.length - 1 : curentIndex - 1;
        setCurentIndex(newIndex);
      
    }
    const mouseEnter = (e) => {
        e.target.style.borderRadius = '50%';
        e.target.style.background = 'black';
      }
      const mouseLeave = (e) => {
        e.target.style.borderRadius = 'none';
        e.target.style.background = 'inherit';
      }
    
    return(
    <RxCaretLeft 
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave} 
     style={leftArrow} 
     onClick={goToPrevious}/>
    )
}
export default ArrowLeft