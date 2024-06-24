import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Movie } from '../movies_list/movie'
import './slide.css'
import styles from '../Popular/popular_list.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const EmblaCarousel = (props) => {
    const { movies, popular } = props
    const OPTIONS = { dragFree: true }
    const SLIDE_COUNT = movies?.length

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <ul className="embla__container">
                    {popular?.results?.map((charac) => (
                        <li className={styles.character} key={charac.id}>
                            <figure className={styles.image_contain}>
                                <LazyLoadImage className={styles.image}src={`https://image.tmdb.org/t/p/original/${charac.profile_path}`} alt="" />
                            </figure>
                            <h3 className={styles.name}>{charac.name}</h3>
                        </li>
                    ))}
                    {movies?.map((movie, i) => (
                        <Movie data_movie={movie} key={i} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

