
import * as React from 'react';
import Bottom from './bottom';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Top from './top';
import { useEffect } from 'react';
export default function Product(props) {
  props.setBackground('#e8eaea')
  useEffect(()=>{
    
  }, [])

const containerProd ={
  
    marginTop: '120px'
}
  return (
    <div  style={containerProd}>
<Top/>
<div style={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
<LeftSide/>
<RightSide/>
</div>
<Bottom/>
    </div>
  );
}
