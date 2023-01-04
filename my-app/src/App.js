import logo from './logo.svg';
import './App.css';
import Main from './component/main'
import PortBody from './component/portfolio/portBody'
import {Routes, Route} from 'react-router-dom'
import Footer from './component/footer'
import Header from './component/header'
import Product from './component/product/product';
import axios from 'axios';
import {fetchPicture, fetchProduct} from './api'
import { useEffect, useState } from 'react';
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [listProduct, setListProduct] = useState();
  const [product, setProduct] = useState();
 
  
  useEffect(()=>{
    fetchProduct()
    .then(res => {setProduct(res.data); setIsLoaded(true); console.log('fetchmethod product res', res.data)})

    fetchPicture()
    .then(res => {setListProduct(res.data); setIsLoaded(true); console.log('fetchmethod listProduct res', res.data)})
  }, [])
  
  
  const [background, setBackground] = useState('inherit')
  if(error){
    return <div>Error: {error.message}</div>;
  }else if(!isLoaded){
    return <div>Loading...</div>
  }else{
  return (
    <div>
      
      <Header background={background} setBackground={setBackground}/> 
      <Routes>
      <Route path='/' element={<Main background={background} setBackground={setBackground} listProduct={listProduct}/>}/>
      <Route path='/product/:id' element={<Product background={background} setBackground={setBackground} product={product}/>}/>
      <Route path='/portfolio' element={<PortBody background={background} setBackground={setBackground} product={product} listProduct={listProduct}/>}/>
      
      </Routes>
      <Footer/>

     {/* <Routes>
        <Route path='subtask1' element={<Subtask1/>}>
          <Route path=':id' element={<Subtask1/>}/>
        </Route>
        <Route path='subtask2' element={<Subtask2/>}/>
        <Route path='subtask3' element={<Subtask3/>}/>
        <Route path='subtask4' element={<Subtask4/>}/>
          
      
  </Routes>*/}
 
   
      
    </div>
  );
}
}

export default App;
