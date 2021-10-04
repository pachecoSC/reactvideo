import React from 'react'
import '../assets/styles/components/Categories.scss'
import PropTypes from 'prop-types'

const Categories = ({ children, tittle, visible }) => visible && (
  <>
    <h3 className='categories__title'>{tittle}</h3>
    {children}
  </>
)

Categories.propTypes = {
  tittle: PropTypes.string,
}

export default Categories
