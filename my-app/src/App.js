import logo from './logo.svg';
import './App.css';

import Main from './component/main'
import Body from './component/body/Body'
import {Routes, Route} from 'react-router-dom'
import Footer from './component/footer'
import PicturePage from './component/picturePage';
import Header from './component/header'
import Product from './component/product/product';
function App() {
  return (
    <div>
      
      <Header/> 
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/product' element={<Product/>}/>
      
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

export default App;
