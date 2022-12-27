import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Main from './component/main'
import Body from './component/body/Body'
import Footer from './component/footer'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Main/>
      <Body/>
      <Footer/>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
