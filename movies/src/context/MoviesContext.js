import React,{createContext, useEffect, useReducer} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [movies,setMovies] = useReducer(moviesReducer,moviesInitialState)
    //const [movies,setMovies] = useState(mockup)
    const [reviews,dispatchReviews] = useReducer(reviewsReducer,reviewsInitialState)
    // const [reviews,dispatchReviews] = useState([])

    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie.id,comment})
        // setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment}])
    }
    //Reto: Cambiar las reviews del estado a reducers

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then(res=>res.json())
        .then(data=>console.log(data))
    })

  return <moviesContext.Provider value={{movies:movies.movies,addReview,reviews:reviews.reviews}}>
      {children}
  </moviesContext.Provider>
}
