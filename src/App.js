
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Layout/Home';
import Solnav2 from './Component/Layout/nav2/Solnav2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/solnav2' element={<Solnav2/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
