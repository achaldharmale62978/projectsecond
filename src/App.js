
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Layout/Home';
import Solnav2 from './Component/Layout/nav2/Solnav2';
import Login from './Component/Loginpage/Login';
import Repage from './Component/REmodule/Repage';


function App() {
  return (

    // git repository https://github.com/achaldharmale62978/projectsecond
    // repository name projectsecond

    
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* LAYOUT */}
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/solnav2' element={<Solnav2/>}/>

          {/* login  */}
          <Route path='/login' element={<Login/>}/>

          {/* RE MODULE */}
          <Route path='/repage' element={<Repage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
