import React,{createContext, useState} from 'react';

export const moviesContext = createContext()
// Mockup
const mockup = [{
    id:"1",
    title:"La casa GUCCI",
    img:"https://es.web.img3.acsta.net/pictures/21/11/10/10/42/1405636.jpg"
},{
    id:"2",
    title:"Dune",
    img:"https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640"
},{
    id:"3",
    title:"Spiderman: No way home",
    img:"http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg"
},
{
    id:"4",
    title:"Encanto",
    img:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
}]

export default function MoviesContext({children}) {

    const [movies,setMovies] = useState(mockup)
    const [reviews,setReviews] = useState([])

  return <moviesContext.Provider value={{movies,setMovies,reviews,setReviews}}>
      {children}
  </moviesContext.Provider>
}
