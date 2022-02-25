import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { login } from './features/user/userSlice';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch("http://localhost:4000/auth/validate",{
      method:"POST",
      credentials:'include'
    })
    .then(res=>res.json())
    .then(data=>{
      dispatch(login(data.user.firstName))
    })
  },[])

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
