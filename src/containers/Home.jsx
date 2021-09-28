/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import config from '../../config'
import '../assets/styles/App.scss'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
// const API = 'http://localhost:3000/initialState';  //se trae en el componente config

const Home = () => {
  const initialState = useInitialState(config.API_URL)

  // console.log(initialState)
  return (
    <div className='App'>
      <Header dest='home' />
      <Search />
      {initialState &&
        Object.keys(initialState).map(
          (cat) => (
            initialState[cat].length > 0 && (
              <Categories tittle={cat} key={cat}>
                <Carousel>
                  {initialState[cat].map((item) => (
                    <CarouselItem key={item.id} {...item} />
                  ))}
                </Carousel>
              </Categories>
            )),
        )}
      <Footer />
    </div>
  )
}

export default Home

//  ! ejemplo de bindeo de las categorias
// {initialState.mylist?.length > 0 && (
//   <Categories tittle='Mi lista'>
//     <Carousel>
//       <CarouselItem />
//     </Carousel>
//   </Categories>
// )}
// {initialState.trends?.length > 0 && ( // pregunta si tiene datos. si-muestra, no-oculta
//   <Categories tittle='Tendencia'>
//     <Carousel>
//       {/* bindear carouselItem */}
//       {initialState.trends?.map((item) => (
//         <CarouselItem key={item.id} {...item} />
//       ))}
//     </Carousel>
//   </Categories>
// )}
// {initialState.originals?.length > 0 && (
//   <Categories tittle='Originales de video'>
//     <Carousel>
//       {initialState.originals?.map((item) => (
//         <CarouselItem key={item.id} {...item} />
//       ))}
//     </Carousel>
//   </Categories>
// )}
