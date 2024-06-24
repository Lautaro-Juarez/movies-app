import { useContext, useEffect } from 'react'
import styles from './movie_detail.module.css'
import { MoviesContext } from '../../../context/MoviesContext';
import { useParams } from 'react-router-dom';
import { SlideByGenre } from '../slideByGenre';

export const Button = () => {
  return <button className={styles.button}><i className="fa-solid fa-play"></i> Watch Trailer </button>
}

export default function MovieDetail() {

  const { movieDetail, getMovieById, getMoviesByGenre, moviesByGenre } = useContext(MoviesContext)
  const { poster_path, title, overview, genres, vote_average, backdrop_path } = movieDetail
  const { id } = useParams()

  useEffect(() => {
    getMovieById(id)
  }, [id])

  return (
    <div className={styles.container}>
      <span className={styles.average}><small className={styles.average_text}>valoration </small>{vote_average?.toFixed(1)}</span>
      <section className={styles.poster_section}>
        <div className={styles.poster_container}>
          <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.belongs_to_collection?.backdrop_path ?? poster_path}`} className={styles.poster} alt="This is a poster movie" />
          <div className={styles.shadow}></div>
          <Button />
        </div>
      </section>
      <ol className={styles.genres}>
        {genres?.map(genre => (
          <li className={styles.genre} key={genre.id}>
            {genre.name}
          </li>
        ))}
      </ol>
      <section className={styles.about_movie}>
        <div className={styles.shadow_title}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.overview_container}>
          <h4>Overview</h4>
          <p className={styles.overview}>{overview}</p>
        </div>
      </section>
      <h4>May like you</h4>
      <SlideByGenre genre={genres?.[0]?.id} />
    </div>
  )
}

