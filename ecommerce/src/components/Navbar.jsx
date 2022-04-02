import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-zinc-900 text-white p-5'>
        <ul className='flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/payment">Payment</Link></li>
        </ul>
    </nav>
  )
}
