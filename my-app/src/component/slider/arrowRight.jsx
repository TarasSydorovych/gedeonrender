import React from "react";
import { RxCaretRight} from "react-icons/rx";
import play from './play'
import enter from './play'
import leave from './play'
const ArrowRight = ({curentIndex, setCurentIndex, images}) => {
    const rightArrow = {
        fontSize: '45px',
        cursor: 'pointer',
        color: 'white'
    }
    const goToNext = () => {
        const ifLastSlide = curentIndex === images.length - 1;
        const newIndex = ifLastSlide ? 0 : curentIndex + 1;
        setCurentIndex(newIndex);
        play();
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
        <RxCaretRight
        onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave} 
     style={rightArrow} onClick={goToNext}/>
    )
}
export default ArrowRight