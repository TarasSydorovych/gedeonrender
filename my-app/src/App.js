import logo from './logo.svg';
import './App.css';
import Main from './component/main'
import PortBody from './component/portfolio/portBody'
import {Routes, Route} from 'react-router-dom'
import Footer from './component/footer'
import Header from './component/header'
import Product from './component/product/product';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [listProduct, setListProduct] = useState();
  const [product, setProduct] = useState();
  useEffect(()=>{
    axios.get(`http://127.0.0.1:4000/list`)
    .then((result) => {
      setListProduct(result.data);
      setIsLoaded(true);
      
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )
  }, [])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:4000/product`)
    .then((result) => {
      setProduct(result.data);
      setIsLoaded(true);
      
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )
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
      <Route path='/product' element={<Product background={background} setBackground={setBackground} product={product}/>}/>
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
