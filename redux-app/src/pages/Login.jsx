import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { URL } from '../config'

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
        <div className='grid grid-cols-2 mt-20'>
            <div className=' bg-gradient-to-br from-lavender-800 to-beau-600 rounded-l-lg flex justify-center items-center'>
                <img src="https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/User_Profile-512.png" alt="Imagen" />
            </div>
            <main className='p-2 bg-white md:p-20 rounded-r-lg'>
                <h1 className='text-gunmetal-700 text-4xl mb-5'>Inicia sesión</h1>
                <p className='mb-10 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos, nam impedit voluptates sequi culpa?</p>
                <form className='flex flex-col' onSubmit={iniciarSesion}>
                    <label className='text-gray-400 text-sm' htmlFor="email">Email...</label>
                    <input className='outline-none border border-beau-200 p-2 rounded-md focus:border-lavender-800 mb-6' id='email' type="email" name="email"/>
                    
                    <label className='text-gray-400 text-sm' htmlFor="password">Pasword...</label>
                    <input className='outline-none border border-beau-200 p-2 rounded-md focus:border-lavender-800 mb-10' id='password' type="password" name="password" />
                    <button className='bg-gunmetal-900 py-2 rounded-md text-white hover:bg-lavender-400 hover:text-lavender-900'>Iniciar sesión</button>
                </form>
                {user.error&&<p>{user.message}</p>}
                {user.loading&&<p>Loading...</p>}
                <div className='flex items-center gap-3 mt-5'>
                    <div className='h-[1px] bg-gray-400 w-full'></div>
                    <p className=''>Ó</p>
                    <div className=' h-[1px] bg-gray-400 w-full'></div>
                </div>
                <a className='flex items-center gap-5 justify-center border border-lavender-400 p-2 mt-5 hover:bg-lavender-400' href={`${URL}/auth/google`}>
                    <FcGoogle/><span className='text-lavender-900'>Inicia sesión con</span>
                </a>
                {/* <button onClick={()=>{dispatch(login("Tzuzul"))}}>Iniciar sesión</button> */}
                {/* <button onClick={()=>{dispatch(logout())}}>Cerrar sesión</button> */}
            </main>
        </div>
    )
}
