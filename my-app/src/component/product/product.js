
import * as React from 'react';
import Bottom from './bottom';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Top from './top';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Product({setBackground, background, product}) {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [product, setProduct] = useState();
  let params = useParams();
  const [id, setId] = useState({
    img: [],
    title: '',
    descr: '',
    client: '',
  });
  // useEffect(()=>{
  //   console.log('Зайшли в іф')
  //   fetchProduct()
  //   .then(res => {setProduct(res.data); setIsLoaded(true); console.log('fetchmethod from product product res', res.data)})
  // }, [])
  useEffect(()=>{
    for(let i = 0; i<product.length; i++){
    
      if(product[i]._id === params.id){
        console.log('наш продукт в продукті',product[i])
        setId(product[i]);
        
      }else{
        
      }
      
        }
  }, [product])
  
  

  useEffect(()=>{
    setBackground('#e8eaea')
  }, [background])
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
