import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const Main = lazy(() => import('../components/main')) 
const MovieDetail = lazy(() => import('../components/main/movieDetail'))

export const router = createBrowserRouter([
    { path: '/', element: <Main/>},
    { path: '/movieDetail/:id', element: < MovieDetail /> },
    { path: '*', element : <Main/> }
  ])