import React from "react";
import play from './play'
import { TbTallymark1 } from "react-icons/tb";
const Pointer = ({setCurentIndex, images}) => {
    
    const pointer = {
        transform: 'rotate(90deg)', 
        color: '#808082', 
        zIndex: 1,  
        fontSize: '50px',
        fontWeight: 'bolder',
        cursor: 'pointer',
       
    }
    const clickPoint = (id) => {
        setCurentIndex(id);
        play();
    }
    
    return(
        <>
        {
            images.map((el,index) => 
            {
                return  <TbTallymark1 
                onMouseEnter={(e) => {e.target.style.color = 'white'}}
                onMouseLeave={(e) => {e.target.style.color = '#808082'}} 
                style={pointer} key={index} 
                onClick={(e) => {
                   
                    clickPoint(index)}}
                />
            })
    
            }
            </>
    )
}
export default Pointer