import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { validate } from './features/user/userSlice';
import DragAndDrop from './pages/DragAndDrop';
import DragAndDrop2 from './pages/DragAndDrop2';
import Home from './pages/Home';
import Login from './pages/Login';
import MyTeams from './pages/MyTeams';
import Team from './pages/Team';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(validate())
  },[])

  return (
    
    
      
      <BrowserRouter>
        <Navbar/>
        <div className='max-w-screen-xl mx-auto'>
        <Routes>
          {/* <Route path="*" element={<NotFound/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/my_teams" element={<MyTeams/>}/>
          <Route path="/my_teams/:idTeam" element={<Team/>}/>
          <Route path="/drag_and_drop" element={<DragAndDrop/>}/>
          <Route path="/drag_and_drop2" element={<DragAndDrop2/>}/>
        </Routes>
        </div>
      </BrowserRouter>

    
  );
}

export default App;
