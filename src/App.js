
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
import REdelete from './Component/REmodule/REdelete';
import Cibil from './Component/OEmodule/Cibil';
import CibilStatus from './Component/REmodule/CibilStatus';
import CibilDelete from './Component/OEmodule/CibilDelete';
import Registration from './Component/REmodule/Registration';
import REgupdate from './Component/REmodule/REgupdate';
import REgdelete from './Component/REmodule/REgdelete';
import Pricing from './Component/Layout/nav2/Pricing';



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
          <Route path='/pricing' element={<Pricing/>}/>

          {/* login  */}
          <Route path='/login' element={<Login/>}/>

          {/* RE MODULE */}
          <Route path='/repage' element={<Repage/>}/>
          <Route path='/reenqueryform' element={<REenqueryform/>}/>
          <Route path='/relist' element={<RElist/>}/>
          <Route path='/reupdate/:userId' element={<REupdate/>}/>
          <Route path='/relogout' element={<RElogout/>}/>
          <Route path='/redelete/:userId' element={<REdelete/>}/>

          <Route path='/cibilstatus' element={<CibilStatus/>}/>
          <Route path='/cibildelete/:cibilId' element={<CibilDelete/>}/>

          <Route path='/register' element={<Registration/>}/>
          <Route path='/regupdate/:regId' element={<REgupdate/>}/>
          <Route path='/regdelete/:regId' element={<REgdelete/>}/>

          {/* OE MODULE */}
          <Route path='/oepage' element={<Oepage/>}/>
          <Route path='/oelist' element={<OElist/>}/>
          <Route path='/oelogout' element={<Oelogout/>}/>
          <Route path='/cibilreg' element={<Cibil/>}/>
         

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
