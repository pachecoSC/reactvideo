/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getVideoSource } from '../actions'
import '../assets/styles/App.scss'
import '../assets/styles/components/Player.scss'
import NotFound from './NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Player = (props) => {
  const { id } = props.match.params
  const { playing } = props
  const hasPlaying = Object.keys(playing).length > 0

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return !hasPlaying ? <NotFound /> : (
    <div className='App'>
      <Header dest='home' />
      <div className='Player'>
        <video controls autoPlay>
          <source src={playing.source} type='video/mp4' />
          Tu navegador no soporta el video
        </video>
        <div className='Player-back'>
          <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource, //aqui va el reducer
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
