import { useEffect, useState } from "react"
import { MoviesContext } from "./MoviesContext"
import { searchMoviesService, getMoviesService, getMovieByIdService, getGenresService, getAllGenresService } from "../services/getMovies.service.js"


export const MoviesProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [movieDetail, setMovieDetail] = useState({})
    const [allGenres, setAllGenres] = useState([])
    const [moviesByGenre, setMoviesByGenre] = useState([])

    //does a call api, get 20 movies for page
    const getAllMovies = async () => {
        const allMovies = await getMoviesService()
        setData(allMovies)
    }

    //does a call api searching name's movie that user puted on search bar
    const searchMovie = async (name) => {
        console.log(name);
        if (name != "") {
            const data = await searchMoviesService(name)
            setSearchData(data)}
    }

    const getMovieById = async (movie_id) => {
        const data = await getMovieByIdService(movie_id)
        setMovieDetail(data)
    }

    const getAllGenres = async () => {
        const data = await getAllGenresService()
        setAllGenres(data)
    }


    useEffect(() => {
        getAllMovies()
        getAllGenres()
    
    }, [])

    return (
        <MoviesContext.Provider value={{ data, searchMovie, searchData, getMovieById, movieDetail, allGenres, getGenresService, moviesByGenre }}>
            {children}
        </MoviesContext.Provider>
    ) 
}

