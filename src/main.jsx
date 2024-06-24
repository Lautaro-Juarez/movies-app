import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { MoviesProvider } from './context/MoviesProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { Header } from './components/header/index.jsx'
import { router } from './routes/AppRouter.jsx'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MoviesProvider>
      <Suspense fallback={<h3>LOADING...</h3>}> 
      <Header />
      <RouterProvider router={router} />
      </Suspense>
    </MoviesProvider>
  )


