import { Link } from 'react-router-dom'
import styles from './movie.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Movie = ({data_movie}) => {
  return (
    <li className={styles.movie} key={data_movie.id}>
      <div className={styles.img_container}>
        <Link to={`/movieDetail/${data_movie.id}` }>
        <LazyLoadImage src={`https://image.tmdb.org/t/p/w200${data_movie.poster_path}`} 
        alt={`this is a poster of movie ${data_movie.title}`}  
        className={styles.poster}/>
        </Link>
        <span className={styles.see_movie}>GO TO MOVIE</span>
      </div>
      <h5 className={styles.title}>{data_movie.title}</h5>
    </li> 
  )
}

