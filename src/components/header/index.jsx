import { useContext, useEffect, useState } from 'react'
import styles from './header.module.css'
import { MoviesContext } from '../../context/MoviesContext'
import { useParams } from 'react-router-dom'

export const Header = () => {
  // simple state for managment of input search where changes if show or not
  const [show, setShow] = useState(false)
  const { searchMovie } = useContext(MoviesContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovie(e.target[0].value)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
           setShow(false)
        }
    })
}, [])


  return (
    /*header component*/
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}><h3> <a href="/">Logo</a></h3></span>
        <span className={styles.search_icon} onClick={() => setShow(!show)}><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>
      {show &&
        <form className={styles.search_container} onSubmit={handleSubmit}>
          <input type="text" placeholder='Search you favourite movie...' className={styles.input_search}  />
        </form>}
    </header>
  )
}
