import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/user/userSlice';

export default function Navbar() {

    const {logged} = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const signOut = () =>{
        dispatch(logout())
      }

  return (
    <nav className="bg-lavender-700 py-3">
        <div className='max-w-screen-xl mx-auto flex justify-between'>
          <p>Tzuzul Code</p>
          <ul className="flex ">
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              {logged?<li onClick={signOut}>Cerrar sesión</li>:<li><Link to="/login">Iniciar sesión</Link></li>}
          </ul>
        </div>
    </nav>
  )
}
