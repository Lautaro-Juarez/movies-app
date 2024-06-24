import { useState, useEffect } from 'react'
import styles from './backToTop.module.css'

export const BackToTop = () => {

    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTop && (
                <span onClick={scrollUp} className={styles.back_top}>
                    <i className={`fa-solid fa-arrow-up ${styles.up}`}></i>
                </span>
            )}
        </div>
    )
}