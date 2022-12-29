
import * as React from 'react';
import Bottom from './bottom';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Top from './top';

export default function Product() {

const containerProd ={
  
    marginTop: '120px'
}
  return (
    <div style={containerProd}>
<Top/>
<div style={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
<LeftSide/>
<RightSide/>
</div>
<Bottom/>
    </div>
  );
}
