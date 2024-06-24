import React, { useEffect, useRef, useState } from 'react'
import styles from './bannerMoviesSlider.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from '../movieDetail';

export const BannerMoviesSlider = ({ movies }) => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li >img")[currentIndex];

        if (imgNode) {
            listNode.scrollTo({
                left: imgNode.offsetLeft - listNode.offsetWidth / 2 + imgNode.offsetWidth / 2,
                behavior: 'smooth'
            });
        }

    }, [currentIndex]);

    const scrollToImage = (e, direction) => {
        e.preventDefault()
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === movies.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    return (
        <div className={styles.slider_container}>
            <div className={styles.leftArrow} onClick={(e) => scrollToImage(e, 'prev')}>&#10092;</div>
            <div className={styles.rightArrow} onClick={(e) => scrollToImage(e, 'next')}>&#10093;</div>
            <ul ref={listRef} className={styles.container_images}>
                {movies?.map((movie, i) => (
                    <li key={i}>
                        <div className={styles.banner_abso}>
                            <span className={styles.overview}>{movie.overview}</span>
                            <span className={styles.button}>WatchNow</span>
                        </div>
                        <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    )
}