import {useDispatch, useSelector} from 'react-redux'
import { login, logout } from './features/user/userSlice';

function App() {
  
  // ¿Quiero consultar el estado global?
  const user = useSelector((state)=>state.user)

  // ¿Quiero actualizar el estado global?
  const dispatch = useDispatch()

  return (
    <div className="App">
      {console.log(user)}
     <p>Usuario: {user.logged?"Bienvenido "+user.name:"Inicia sesión"}</p>
     <button onClick={()=>{dispatch(login("Tzuzul"))}}>Iniciar sesión</button>
     <button onClick={()=>{dispatch(logout())}}>Cerrar sesión</button>
    </div>

    // Agregar un router: Pagina principal, Pagina de inicio de sesión. 
    // Iconos de redes sociales: Google, Facebook, Twitter, GitHub
  );
}

export default App;
