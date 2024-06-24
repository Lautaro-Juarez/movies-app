import { useContext } from 'react';
import styles from './movies_list.module.css';
import { MoviesContext } from '../../../context/MoviesContext';
import { Movie } from './movie';
import { SlideByGenre } from '../slideByGenre';

export default function MoviesList() {

  const {data, searchData } = useContext(MoviesContext)

  return (
    <ul className={styles.movies_list}>
      {searchData?.results?.map(movie => (
      <Movie data_movie={movie} key={movie.id}/>
     ))}
     {searchData.length === 0 && data?.results?.map(movie => (
      <Movie data_movie={movie} key={movie.id}/>
     ))}
    </ul>
  )
}

