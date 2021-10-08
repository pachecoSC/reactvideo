/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { connect } from 'react-redux'
// import config from '../../config'
import '../assets/styles/App.scss'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
// import useInitialState from '../hooks/useInitialState'
// const API = 'http://localhost:3000/initialState';  //se trae en el componente config

const Home = ({ mylist, trends, originals }) => {
  // const initialState = useInitialState(config.API_URL)
  // eslint-disable-next-line no-use-before-define
  const categoriesTittle = Array.from(Object.keys(mapStateToProps(''))) //obtiene un array desde un objeto
  // console.log(categoriesTittle)
  //funcion switch
  function SelectionCategory(key) {
    const res = { tittle: '', visible: '', componente: '' }
    switch (key) {
      case 'mylist':
        res.tittle = 'mi lista'
        res.visible = mylist?.length > 0
        res.componente = mylist?.map((item) => <CarouselItem key={item.id} {...item} />)
        break
      case 'trends':
        res.tittle = 'tendencias'
        res.visible = trends?.length > 0
        res.componente = trends?.map((item) => <CarouselItem key={item.id} {...item} />)
        break
      case 'originals':
        res.tittle = 'originales'
        res.visible = originals?.length > 0
        res.componente = originals?.map((item) => <CarouselItem key={item.id} {...item} />)
        break
      default:
        break
    }
    return res
  }

  //funcion para obtner el titulo de la categoria
  function fGetTittleCategory(key) {
    const res = SelectionCategory(key)
    return res.tittle
  }
  //funcion para saber si es la categoria seria visible o no
  function fVisibleCategoriy(key) {
    const res = SelectionCategory(key)
    // console.log('visible', res.visible)
    return res.visible
  }
  //funcion para pintar segun la categoria
  function fBindeoCarousel(key) {
    const res = SelectionCategory(key)
    return res.componente
  }

  // ! commit 461f6787eacb40441264af10fe2c3c993a50cbd2 -- codigo funciona con el hook useInitialState
  return (
    <div className='App'>
      <Header dest='home' />
      <Search />
      {categoriesTittle.map(
        (cat) => categoriesTittle.length > 0 && (
          <Categories tittle={fGetTittleCategory(cat)} key={cat} visible={fVisibleCategoriy(cat)}>
            <Carousel>
              {fBindeoCarousel(cat)}
            </Carousel>
          </Categories>
        ),
      )}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home)
