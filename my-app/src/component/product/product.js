
import * as React from 'react';
import Bottom from './bottom';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Top from './top';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Product({setBackground, background, product, setStyleAppBar,appBarStyleTwo, styleAppBar}) {

  let params = useParams();
  const [id, setId] = useState({
    img: [],
    title: '',
    descr: '',
    client: '',
  });
 
  useEffect(()=>{
    setStyleAppBar(appBarStyleTwo)
    for(let i = 0; i<product.length; i++){
    
      if(product[i]._id === params.id){
        
        setId(product[i]);
        
      }else{
        
      }
      
        }
        
  }, [product])
  
  
  

const containerProd ={
  
    marginTop: '120px'
}

  return (
    <div  style={containerProd}>
<Top/>
<div style={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
<LeftSide id={id}/>
<RightSide id={id}/>
</div>
<Bottom/>
    </div>
  );

}
