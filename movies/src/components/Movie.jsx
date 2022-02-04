import React from 'react';
import {Link} from 'react-router-dom'

export default function Movie({movie}) {
    return <article className='movie'>
        {/* Bloque contenedor */}
        <Link to={"/details/"+movie.id}><h2 className='movie__title'>{movie.title}</h2></Link>
        <div className='movie__stars'>🍉 🍉 🍉 🍉 🍉</div>
        <img className='movie__image' src={movie.img} alt={movie.title}></img>
    </article>
}
