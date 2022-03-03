import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Login() {
    // ¿Quiero consultar el estado global?
    const user = useSelector((state)=>state.user)

    // ¿Quiero actualizar el estado global?
    const dispatch = useDispatch()

    //Navegación
    const navigate = useNavigate()

    useEffect(()=>{
        if(user.logged){
            navigate("/")
        }
    },[user])

    const iniciarSesion = (event) => {
        event.preventDefault()
        const {email:{value:email},password:{value:password}} = event.target
        dispatch(login({email,password}))
    }

    return (
        <div>
            {console.log(user)}
            <p>Usuario: {user.logged?"Bienvenido "+user.name:"Inicia sesión"}</p>
            <form onSubmit={iniciarSesion}>
                <input type="email" name="email"/>
                <input type="password" name="password" />
                <button>Iniciar sesión</button>
            </form>
            {user.error&&<p>{user.message}</p>}
           {user.loading&&<p>Loading...</p>}
            <a href="https://backendtzuzulcode.wl.r.appspot.com/auth/google">
                <span>
                    Inicia sesión con <FcGoogle/> 
                </span>
            </a>
            {/* <button onClick={()=>{dispatch(login("Tzuzul"))}}>Iniciar sesión</button> */}
            <button onClick={()=>{dispatch(logout())}}>Cerrar sesión</button>
        </div>
    )
}
