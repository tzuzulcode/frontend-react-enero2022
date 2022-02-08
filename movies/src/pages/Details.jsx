import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import { moviesContext } from '../context/MoviesContext';
//import NotFound from './NotFound';

export default function Details() {
  const {id} = useParams()
  const {movies,reviews,setReviews,setMovies} = useContext(moviesContext)
  const comentario = useRef()
  const rating = useRef()
  //const navigate = useNavigate()

  const movie = movies.filter(movie=>movie.id===id)[0]



  // if(!movie){
  //   return <NotFound/>
  // }
  if(!movie){
    return <Navigate to="/notfound"/>
  }

  const addReview = ()=>{
    let valueComment = comentario.current.value
    let stars = rating.current.value
    movie.stars= movie.stars + parseInt(stars)
    movie.numberOfReviews++
    setMovies([...movies])
    setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment:valueComment}])
  }

  return <div>
      <p>Details {id}</p>
      <Movie movie={movie}></Movie>
      <div>
        <input ref={comentario} type="text"></input>
        <select ref={rating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={addReview}>Agregar review</button>
      </div>

      {/* && (and): Operador de cortocircuito */}
      {/* || (or)*/}
      {reviews.map(review=>review.idMovie===id&&<p>{review.comment}</p>)}

      {/* Mostrar comentarios */}
      
  </div>;
}


// Reto (miercoles): Incorporar lo que tenemos con reducers (useReducer)