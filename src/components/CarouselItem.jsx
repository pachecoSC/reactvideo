import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../actions/index'
import playIcon from '../assets/images/play-icon.png'
import plusIcon from '../assets/images/plus-icon.png'
import deleteIcon from '../assets/images/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png'

const CarouselItem = (props) => {
  // console.log('props', props)
  const { id, cover, title, year, contentRating, duration, isList } = props

  const HandleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    })
  }

  const HandleDeleteFavorite = (id) => {
    props.deleteFavorite(id)
  }

  return (
    <div className='carousel-item' id={id}>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={deleteIcon}
              alt='Delete Icon'
              onClick={() => HandleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={HandleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  )
}
CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

// export default CarouselItem
export default connect(null, mapDispatchToProps)(CarouselItem)
