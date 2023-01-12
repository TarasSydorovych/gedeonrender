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
  const [background, setBackground] = useState('inherit')
  const appBarStyleFirst = { justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: `${background}`,};
const appBarStyleW = { justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: '#142c2d',};
const appBarStyleTwo =   { justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: '#142c2d',};
 
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [listProduct, setListProduct] = useState();
  const [product, setProduct] = useState();
  const [styleAppBar, setStyleAppBar] = useState(appBarStyleFirst);
  
  useEffect(()=>{
    fetchProduct()
    .then(res => {setProduct(res.data); setIsLoaded(true); })

    fetchPicture()
    .then(res => {setListProduct(res.data); setIsLoaded(true); })
  }, [])
  
  
 
  if(error){
    return <div>Error: {error.message}</div>;
  }else if(!isLoaded){
    return <div>Loading...</div>
  }else{
  return (
    <div>
      
      <Header background={background} setBackground={setBackground} appBarStyleTwo={appBarStyleTwo} styleAppBar={styleAppBar} setStyleAppBar={setStyleAppBar}/> 
      <Routes>
      <Route path='/' element={<Main appBarStyleFirst={appBarStyleFirst} appBarStyleTwo={appBarStyleTwo} setStyleAppBar={setStyleAppBar} styleAppBar={styleAppBar} listProduct={listProduct}/>}/>
      <Route path='/product/:id' element={<Product appBarStyleTwo={appBarStyleTwo} setStyleAppBar={setStyleAppBar} product={product} styleAppBar={styleAppBar}/>}/>
      <Route path='/portfolio' element={<PortBody  product={product} listProduct={listProduct}  appBarStyleTwo={appBarStyleTwo} setStyleAppBar={setStyleAppBar}/>}/>
      
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
