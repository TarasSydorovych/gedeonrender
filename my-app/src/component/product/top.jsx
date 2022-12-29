
import * as React from 'react';
import { AiOutlineAppstore, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default function Top() {
const styleTopProd ={
display: 'flex',
width: '100%',
justifyContent: 'flex-end',
marginBottom: '10px',

}
const mouseEnterLeft = (e) => {
    e.target.style.marginRight = '25px'
    e.target.style.transitionDuration = '0.2s';
    e.target.style.color = '#05c495';
}
const mouseLeaveLeft = (e) => {
    e.target.style.marginRight = '20px';
    e.target.style.color = '#545454';
}
const mouseEnterRight = (e) => {
    e.target.style.marginRight = '15px'
    e.target.style.marginLeft = '5px'
    e.target.style.transitionDuration =  '0.2s';
    e.target.style.color = '#05c495';
}
const mouseLeaveRight = (e) => {
    e.target.style.marginRight = '20px'
    e.target.style.marginLeft = '0px'
    e.target.style.color = '#545454';
}

  return (
    <>
<div style={styleTopProd}>
    <AiOutlineLeft onMouseEnter={mouseEnterLeft}
    onMouseLeave={mouseLeaveLeft} 
      style={{color: '#545454', marginRight: '20px', marginTop: 6.5, fontSize: 15}}/>
<AiOutlineAppstore style={{color: '#545454', marginRight: '20px', fontSize: 30, }}/>
<AiOutlineRight
onMouseEnter={mouseEnterRight}
onMouseLeave={mouseLeaveRight} 
 style={{color: '#545454', marginRight: '20px', marginTop: 6.5, fontSize: 15}}/>
</div>
    </>
  );
}
