import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Main from './component/main'
import Body from './component/body/Body'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Main/>
      <Body/>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
