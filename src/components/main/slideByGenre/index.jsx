import React, { useContext, useEffect, useState } from 'react'

import styles from './slide.module.css'
import { MoviesContext } from '../../../context/MoviesContext';
import { Movie } from '../movies_list/movie';
import { useParams } from 'react-router-dom';
import { getGenresService } from '../../../services/getMovies.service';
import { EmblaCarousel } from '../slide/EmblaCarousel'

export const SlideByGenre = ({ genre }) => {
  const { moviesByGenre } = useContext(MoviesContext)
  const [movies, setMovies] = useState([])

  const getMoviesByGenre = async (id) => {
    if (id) {
      const data = await getGenresService(id)
      setMovies(data.results)
    }

  }

  useEffect(() => {
    getMoviesByGenre(genre)
  }, [genre])

  return (
    <EmblaCarousel movies={movies} />
  )

}

