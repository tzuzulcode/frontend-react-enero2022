import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import { moviesContext } from '../context/MoviesContext';
//import NotFound from './NotFound';

export default function Details() {
  const {id} = useParams()
  const {movies,reviews,setReviews} = useContext(moviesContext)
  const comentario = useRef()
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
    setReviews([...reviews,{id:movie.id,valueComment}])
  }

  return <div>
      <p>Details {id}</p>
      <Movie movie={movie}></Movie>
      <div>
        <input ref={comentario} type="text"></input>
        <button onClick={addReview}>Agregar review</button>
      </div>

      {/* Mostrar comentarios */}
      
  </div>;
}
