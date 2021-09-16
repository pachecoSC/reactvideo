import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, tittle }) => (
  <>
    <h3 className='categories__title'>{tittle}</h3>
    {children}
  </>
)

export default Categories
