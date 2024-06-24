import { useContext, useState, lazy } from 'react'
import styles from './main.module.css'
import MoviesList from './movies_list/'
import { BackToTop } from '../backToTop'
import { MoviesContext } from '../../context/MoviesContext'
import { BannerMoviesSlider } from './bannerMoviesSlider'

const PopularList = lazy(() => import('./Popular/Index'))

export default function Main() {

  const { data } = useContext(MoviesContext);
  const movies = []

  for (let i = 0; i < 10; i++) {
    if (data?.results?.[i]?.backdrop_path) {
      movies[i] = data.results[i]
    }
  }

  return (
    <>
      {<BannerMoviesSlider movies={movies} />}
      <main className={styles.main}>
        <h2 className={styles.title}>Movies List</h2>
        <section className={styles.list_container}>
          <MoviesList />
        </section>
        <BackToTop />
        <PopularList />
      </main>
    </>
  )
}

