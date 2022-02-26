import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    // ¿Quiero consultar el estado global?
    const user = useSelector((state)=>state.user)

    // ¿Quiero actualizar el estado global?
    const dispatch = useDispatch()

    //Navegación
    const navigate = useNavigate()

    const iniciarSesion = (event) => {
        const {email,password} = event.target

        event.preventDefault()
        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email.value,
                password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            dispatch(login(user.firstName))
            navigate(-1)
        }).catch(error=>console.log(error))
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
