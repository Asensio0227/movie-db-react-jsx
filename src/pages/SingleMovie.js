import { Link, useParams } from 'react-router-dom'
import useFetch  from '../components/useFetch';
import Loading from '../components/Loading';

export const API_END_POINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return (
      <Loading/>
    )
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to='/' className="btn">
          back to movies
        </Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <main>
      <Link to='/' className="btn">
        back home
      </Link>
    <section className="single-movie section">
      <img src={poster === "N/A" ? url: poster} alt={title} />
      <div className="single-movie-info">
        <h4>{plot}</h4>
        <p>{year}</p>
      </div>
    </section>
    </main>
  )
}

export default SingleMovie