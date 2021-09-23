/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'

import config from '../../config'
import '../assets/styles/App.scss'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

// const API = 'http://localhost:3000/initialState';

const App = () => {
  const [videos, setVideos] = useState([])
  //  ! useState necesita parametros
  //  ! string      'texto'
  //  ! int      0
  //  ! objeto      []

  useEffect(() => {
    fetch(config.API_URL)
      .then((response) => response.json())
      .then((data) => setVideos(data))
  }, [])
  //  ! useEffect recibe dos parametros
  //  ! 1. - funcion a trabajar.
  //  ! 2. - cuando se va a ejecutar, si no enviamos parametro seria un bucle infinito,si tiene un array vacio
  //  ! [] esta función solo se ejecutará al montar o desmontar el componente.

  console.log(videos)
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist?.length > 0 && (
        <Categories tittle='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories tittle='Tendencia'>
        <Carousel>
          {videos.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories tittle='Originales de video'>
        <Carousel>
          {videos.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  )
}

export default App
