import React from 'react'
import { EmblaCarousel } from '../slide/EmblaCarousel'
import { getActors} from '../../../services/getMovies.service'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PopularList() {

const [popular, setPopular] = useState()

    const aver = async () => {
        const data = await getActors()
        setPopular(data)
    }

useEffect(() => {
    aver()
},[])

  return (
   <section >
    <h4 style={{margin:'50px 50px 0'}}>POPULAR ACTORS</h4>
    <EmblaCarousel popular={popular}/>
   </section>
  )
}

