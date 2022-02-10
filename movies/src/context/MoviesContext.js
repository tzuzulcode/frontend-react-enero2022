import React,{createContext, useReducer, useState} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [movies,setMovies] = useReducer(moviesReducer,moviesInitialState)
    //const [movies,setMovies] = useState(mockup)
    const [reviews,setReviews] = useState([])

    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment}])
    }
    //Reto: Cambiar las reviews del estado a reducers

  return <moviesContext.Provider value={{movies:movies.movies,addReview,reviews}}>
      {children}
  </moviesContext.Provider>
}
