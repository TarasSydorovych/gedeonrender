import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Main from './component/main'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
