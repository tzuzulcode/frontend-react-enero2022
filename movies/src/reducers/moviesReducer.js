// Mockup
// const mockup = [{
//     id:"1",
//     title:"La casa GUCCI",
//     stars:0,
//     numberOfReviews:0,
//     img:"https://es.web.img3.acsta.net/pictures/21/11/10/10/42/1405636.jpg"
// },{
//     id:"2",
//     title:"Dune",
//     stars:0,
//     numberOfReviews:0,
//     img:"https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640"
// },{
//     id:"3",
//     title:"Spiderman: No way home",
//     stars:0,
//     numberOfReviews:0,
//     img:"http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg"
// },
// {
//     id:"4",
//     title:"Encanto",
//     stars:0,
//     numberOfReviews:0,
//     img:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
// }]

export const moviesInitialState = {
    movies:[]
}

export default function moviesReducer(state,action){
    let newState;
    switch(action.type){
        case 'addStars':
            const {movie,stars} = action
            movie.stars = movie.stars + parseInt(stars)
            movie.numberOfReviews++
            newState = {movies:[...state.movies]}
            break;
        case 'addMovies':
            const {movies} = action
            newState = {movies}
            break;
        default:
            newState = state;
    }

    return newState
}