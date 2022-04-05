import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from './components/Navbar';
import NavbarStyled from './components/NavbarStyled';
import Home from './pages/Home';
import Payment from './pages/Payment';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarStyled/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
