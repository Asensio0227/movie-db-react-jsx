import { useGlobalContext } from "./Context";
import { Link } from 'react-router-dom'
import Loading from './Loading';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movie,loading } = useGlobalContext();
  console.log(movie);

  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <section className="movies">
      {movie.map((move) => {
        const { imdbID: id, Year: year, Type: type, Title: title, Poster: poster } = move;
        return (
          <Link to={`/movie/${id}`} className="movie" key={id}>
          <article >
            <img src={poster === "N/A" ? url : poster} alt={title} />
            <div className="movie-info">
              <h4>{title}</h4>
              <p>{year}</p>
              <p>{type}</p>
            </div>
          </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies