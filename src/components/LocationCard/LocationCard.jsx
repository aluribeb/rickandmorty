import React from 'react'
import './LocationCard.css'

const LocationCard = ({ location }) => {
  return (
    <div className='LocationCard__todo'>
    <article className='LocationCard__body'>
      <h2 className='LocationCard__name'>{location?.name}</h2>
      <ul>
        <li className='LocationCard__list'><span className='LocationCard__item'>Type: </span><span className='LocationCard__value'>{location?.type}</span></li>
        <li className='LocationCard__list'><span className='LocationCard__item'>Dimension: </span><span className='LocationCard__value'>{location?.dimension}</span></li>
        <li className='LocationCard__list'><span className='LocationCard__item'>Population: </span><span className='LocationCard__value'>{location?.residents.length}</span></li>
      </ul>
    </article>
    </div>
  )
}

export default LocationCard
