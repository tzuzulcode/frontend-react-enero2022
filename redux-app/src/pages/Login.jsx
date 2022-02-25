import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'

export default function Login() {
    // ¿Quiero consultar el estado global?
    const user = useSelector((state)=>state.user)

    // ¿Quiero actualizar el estado global?
    const dispatch = useDispatch()

    const iniciarSesion = (event) => {
        const {email,password} = event.target

        event.preventDefault()
        fetch("http://localhost:4000/auth/login",{
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
            console.log(user)
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
            {/* <button onClick={()=>{dispatch(login("Tzuzul"))}}>Iniciar sesión</button> */}
            <button onClick={()=>{dispatch(logout())}}>Cerrar sesión</button>
        </div>

        // Agregar un router: Pagina principal, Pagina de inicio de sesión. 
        // Iconos de redes sociales: Google, Facebook, Twitter, GitHub
    )
}
