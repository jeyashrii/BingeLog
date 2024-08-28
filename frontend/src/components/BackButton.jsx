import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <div><Link to={'/'}><ion-icon name="chevron-back-circle-outline"></ion-icon></Link></div>
  )
}

export default BackButton