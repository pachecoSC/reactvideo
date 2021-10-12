/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getVideoSource } from '../actions'
import '../assets/styles/components/player.scss'
import NotFound from './NotFound'

const Player = (props) => {
  const { id } = props.match.params
  const { playing } = props
  const hasPlaying = Object.keys(playing).length > 0

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return !hasPlaying ? <NotFound /> : (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
        Tu navegador no soporta el video
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
      </div>
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
