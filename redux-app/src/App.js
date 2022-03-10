import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { validate } from './features/user/userSlice';
import Home from './pages/Home';
import Login from './pages/Login';

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
        </Routes>
        </div>
      </BrowserRouter>

    
  );
}

export default App;
