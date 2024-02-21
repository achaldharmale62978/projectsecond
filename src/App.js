
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Layout/Home';
import Solnav2 from './Component/Layout/nav2/Solnav2';
import Login from './Component/Loginpage/Login';
import Repage from './Component/REmodule/Repage';
import REenqueryform from './Component/REmodule/REenqueryform';
import RElist from './Component/REmodule/RElist';
import RElogout from './Component/REmodule/RElogout';
import Oepage from './Component/OEmodule/Oepage';
import OElist from './Component/OEmodule/OElist';
import Oelogout from './Component/OEmodule/Oelogout';
import Cmpage from './Component/CMmodule/Cmpage';
import Cmlist from './Component/CMmodule/Cmlist';
import Cmlogout from './Component/CMmodule/Cmlogout';
import REupdate from './Component/REmodule/REupdate';


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
          <Route path='/reenqueryform' element={<REenqueryform/>}/>
          <Route path='/relist' element={<RElist/>}/>
          <Route path='/reupdate/:userId' element={<REupdate/>}/>
          <Route path='/relogout' element={<RElogout/>}/>

          {/* OE MODULE */}
          <Route path='/oepage' element={<Oepage/>}/>
          <Route path='/oelist' element={<OElist/>}/>
          <Route path='/oelogout' element={<Oelogout/>}/>

          {/* CM MODULE */}
          <Route path='/cmpage' element={<Cmpage/>}/>
          <Route path='/cmlist' element={<Cmlist/>}/>
          <Route path='/cmlogout' element={<Cmlogout/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
