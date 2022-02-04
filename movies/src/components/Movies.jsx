import Movie from "./Movie";

export default function Movies({movies}) {
    return <section className='movies'>
        {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
    </section>
  }