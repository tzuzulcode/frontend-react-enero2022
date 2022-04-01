import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Payment from './pages/Payment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
