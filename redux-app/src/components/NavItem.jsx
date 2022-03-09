import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem({title,to}) {
  return (
    <li className='text-lavender-900 hover:text-white m-0 ml-3 cursor-pointer'>
        <Link to={to}>{title}</Link>
    </li>
  )
}
